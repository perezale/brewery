import _ from 'lodash';

module.exports = function (command, spaces) {
  if (!_.size(command.commands)) {
    return command.outputHelp();
  }

  const defCmd = _.find(command.commands, function (cmd) {
    return cmd._name === 'serve';
  });

  const desc = !command.description() ? '' : command.description();
  const cmdDef = !defCmd ? '' : `=${defCmd._name}`;

  return (
`
Usage: ${command._name} [command${cmdDef}] [options]
${desc}
Commands:
${indent(commandsSummary(command), 2)}
${cmdHelp(defCmd)}
`
  ).trim().replace(/^/gm, spaces || '');
};

