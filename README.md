# Employee-summary
## DESCRIPTION :

this is an Employee-Summary team generator, This CLI application generates and saves an html file based on the user input.

When the application starts the user will be prompted to input the details of a team. The team can have only one manager and any combination of engineers and interns. First the user will enter manager's details, and then the details of all the team members.

After manager's details are input , the user can choose to populate details for new team member or exit the prompt. After the user exits the prompt, the html file will be generated in the /output folder.

The system will get the array of user answers, transform it into array of objects of respective classes (Manager, Engineer or Intern), and then generate an html based on such team array.

## TABLE OF CONTEND

- [inatallation](#Installation)
- [dependencies](#Dependences)
- [tools used](#Tools used)
- [chalenges](#Chalenges)
- [contributors](#Contributors)
- [video guits](#Video guits)
- [links](#Links)
  

## Istallation :

installation is possible only with the bellow dependences, else it will not be possible




## Dependences :

in this application, i mainly used a few dependeces being * inquirer* for prompting my questions on the command line,*jest*for running my neccesary test,
*fs* for writting and reading files all over particular html pages on my app, running  this application without this dependences are impossible to achieve




## Tools used :

the tools i used for the whole of this project where  *my visual studio code* *my chroom screen castify* for video recurding 


## Chalenges :

Building the class constructor, i had a challenge in writing the syntax properly and forming a deeper understanding of the Node.JS coding environment. When I tried to pass the constructors into the tests, module exports did not work because I enclosed the constructor in { }, when it was unnecessary due to there being only one item.I also tried creating the file management container to later export,but it was quit difficult and i had to go with another way without using it. For my prompts, I wanted to separate the manager's prompts from the employee's prompts, using a separate group of questions for the two types. The challenge here was checking user input and validating the information entered. Using the documentation of Inquirer, I added a conditional to decide whether to ask for the employee's Github or school name, and also implemented validation. Checking for a valid email address was difficult, but I ended up using a regular expression to check that there was a string of characters, an @ sign, and another string followed by two or three characters after a dot.

The most significant challenge was writing the information received in the command line to the HTML templates. My plan was to read the main page template and then write it to a new file in the output, then append user cards to the html based on their roles, and finally append the closing tags necessary to render the webpage properly. I achieved part 1 and part 3 using writefilesync and appendfilesync to have these operations occur synchronously. To execute part 2 I used a for loop which identified the current employee's role, after which the appropriate template would be read and the necessary information applied before appending it to the half-generated page in the output.

The problem with this approach is that replacing content inside an HTML page via Node is more difficult than using front end JavaScript. For instance, DOM traversal is unhandled in the Node environment. It turned out that I assumed the data passed in through readFile was a string, thus the replace method did not apply correctly. Debugging revealed simple mistakes which when rectified allowed the final output page to render properly.



 


## VIDEO LINKS 
#### you can wash the test made using gest here  :  https://drive.google.com/file/d/19zY_fwWFPQFHbN2NYzF1bPYA1fRaABlq/view

#### video link for my application usage : https://drive.google.com/file/d/1ynOVtyKeUzDIyy47qyy86t_N26fPIhGf/view
