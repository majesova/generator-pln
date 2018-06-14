const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator{
    initializing (){
		this.log('Initializing...');
    }
    prompting() {
        this.log('Do prompting...');
        this.log(
            yosay(`Welcome to the perfect ${chalk.red('generator-pln')} generator!`)
          );

        return this.prompt([{
            type    : 'input',
            name    : 'projectName',
            message : 'Your project name:',
            default : 'Plenumsoft',
            store: true
          }]).then((answers) => {
                this.props = answers;
                this.dataTemplate = {};
                this.dataTemplate.projectName = answers.projectName;
          });
    }
    configuring(){
		this.log('Do configuring...');
    }
    writing (){
		this.log('Do writing...');
		
		this.fs.copyTpl(
		  this.templatePath('index.html'),
		  this.destinationPath(this.dataTemplate.projectName + '.html'),
		  { message: 'Hello world!' }
		);
	}
    conflicts (){
		this.log('Do conflicts...');
    }
    install (){
       this.log('Do install...');
    }
    end (){
		this.log('Do end...');
    }
};