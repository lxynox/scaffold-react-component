# scaffold-CLC

### how to install

```bash
$ git clone https://github.com/lxyad/scaffold-CLC.git
$ cd scaffold-CLC
$ npm install
$ npm link # Make `scaffold` a global available command
```

### how to use

1. Update the [templates](./templates) based on a bare minimal setup for each component.
2. Update the [settings.yml](./settings.yml) based on the folder structure we'll use for the component library.

An example would look like:

```
v2
├── Button
│   ├── Button.css
│   ├── Button.js
│   ├── Button.md
│   ├── __tests__
│   │   └── Button.specjs
│   └── index.js
└── Form
    ├── Select.css
    ├── Select.js
    ├── Select.md
    ├── TextArea.css
    ├── TextArea.js
    ├── TextArea.md
    ├── TextInput.css
    ├── TextInput.js
    ├── TextInput.md
    ├── __tests__
    │   ├── Select.specjs
    │   ├── TextArea.specjs
    │   └── TextInput.specjs
    └── index.js
```

### how to test

Change to the directory you want to output files, say somewhere under employer-web-client, then

```
$ scaffold
```



