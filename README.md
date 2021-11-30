# NODEJS Basics

As NODEJS platform has lots of built-in packages, this repo contains code to create a node server with minimum third-party packages.

# RESPONSE

The response format followed is as follows
{
status: the status code of the API response,
result: the actual data from the API
message: the message of the operation performed
}

# DIRECTORY & FILES

The directory structure is as follows:

1. data - This directory contains the postman collection used for testing the APIs. Each route has a sample response saved in the example.

2. logs - This directory contains the log files of the application. The file name determines the log message type. Currently there are three types, info, warn and error.

3. node_modules - This directory contains all the files of the dependencies & devDependencies of the application.

4. src - This directory contains all the files of the application.

5. .gitignore - This file is related to GIT to ignore the files which are not to be pushed to the repo.

6. .prettierrc - This file is related to PRETTIER extension of VSCode. This file contains the configurations used for formatting the files.

7. LICENSE - This file contains the details related to copy and usage of the content from the repo.

8. package-lock.json - This file is generated when the node_modules are installed. This file is helpful in fixing the version of the dependencies.

9. package.json - This file contains details about the project, it's dependencies and devDependencies and scripts for running the project.

10. README.md - This file contains the all the information necessary for a person using the repo.
