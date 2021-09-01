
program
.version(pkg.version)
.description(
  'Kibana is an open source (Apache Licensed), browser ' +
  'based analytics and search dashboard for Elasticsearch.'
);

// attach commands
serveCommand(program);

program
.command('help <command>')
.description('Get the help for a specific command')
.action(function (cmdName) {
  const cmd = _.find(program.commands, { _name: cmdName });
  if (!cmd) return program.error(`unknown command ${cmdName}`);
  cmd.help();
});
