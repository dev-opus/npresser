# npresser

A simple CLI application for easily compressing and decompressing files.

## Installation

- Clone this remote repository to your local
  machine.

- run `npm install` to install dependencies.

- run `npm link` to make index.js an executable and runable from any directory via its alias `npresser`.

## Usage

`npresser press file.txt` - to ccompress a single file.

`npresser press file1.txt file2.txt music.mp3 video.mp4` - to compress multiple files.

`npresser unpress file.txt.gz` - to deccompress a single file.

`npresser unpress file1.txt.gz file2.txt.gz music.mp3.gz video.mp4.gz` - to decompress multiple files.

Additionally, you can run the following command `npresser help` to display the help page and a list of available commands and flags.

## Technologies Used

This program is written in JavaScript (Node.js) and uses the `create-node-cli` package to bootstrap the CLI tools.

## Contributing

Like this project, seen a bug or feature you think should be implemented? Fork this repo and send a pull request! I'm open to collaborations!
