# Challenge-ioet (ACME)

This project is about a Challenge for the IOET company about the ACME exercise.

## Solution approach

For the right manage of the times my approach was to transform to number all the times, for example, if the time is "12:00" I am reading it like 1200. With this is more easier.

The steps of all the project are:

- Load and send the file (.txt) from the client.
- Read this file from API.
- Save it in local the file.
- Split the string for employee, then for each day, and finally, for hours.
- Apply the business logic.
- Response with the rates and employees to client.
- Show the results in a table.

## Installation

For the instalation, just clone this repo in a local folder, like:

```bash
git clone git@github.com:frengo121/challenge-ioet.git
```

## Usage

Go to the project's folder and run the following commands:

```bash
#To install packages
make init

#To run the server (API)
make run-server

#IMPORTANT: this command is necesary run in other command line
#To run the client
make run-client

#To run the test on server
make test
```

When run the commands, you sould have these routes:

**SERVER:** localhost:4000

**CLIENT:** localhost: 3000

## Example file

You can use the example .txt file to test. This file is on this direction:

```bash
back/data/example-file.txt
```

## Tech Stack

- Front:
  - React (v. 17.0.2)
  - Css
- Back:
  - NodeJS
  - Express (v. 4.17.1)

## License

[MIT](https://choosealicense.com/licenses/mit/)
