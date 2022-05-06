# Challenge-ioet (ACME)

This project is about a Challenge for the IOET company about the ACME exercise.

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
make run test
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
