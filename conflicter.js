const {pathExists} = require('fs-extra')
const detectConflict = require('detect-conflict')
const prompt = require('inquirer').prompt

function Conflicter() {
  let batch // force batch update(overwrite/backup/skip)
  
  /**
   * Check if in-mem file contents collides with the on disk file
   * 
   * @param  {Object}   file contains filepath and file contents
   * @param  {Function} cb  handles the result of the conflict check
   */
  
  const checkConflict = async (file, cb) => {
    const {filepath, contents} = file

    if (!await pathExists(filepath)) {
      cb(file, 'create')
      return
    }
    
    if (!detectConflict(filepath, contents)) {
      cb(file, 'identical')
      return
    } 

    if (batch) {
      cb(file, batch)
      return
    }

    await ask(file, cb)
  }

  const ask = async (file, cb) => {
    const prompts = {
      name: 'action',
      type: 'list',
      message: `Overwrite ${file.filepath}?`,
      choices: ['overwrite', 'overwrite all', 'backup', 'backup all', 'skip', 'skip all'],
      default: 0
    }
    const results = await prompt(prompts)
    const [action, all] = results.action.split(' ')

    // set batch update
    if (all) batch = action

    cb(file, action)
  }

  return {check: checkConflict}
}

module.exports = Conflicter
