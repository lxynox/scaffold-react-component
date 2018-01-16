<% Object.keys(components).forEach(componentName => { -%>
export <%=componentName%> from './<%=components[componentName]%>';
<% }) -%>
