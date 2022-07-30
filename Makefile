TAG ?= dev
DATE = $(shell date -u +'%Y-%m-%dT%H:%M:%SZ')
GIT_COMMIT = $(shell git describe --always)
GIT_URL = $(shell git config --get remote.origin.url)

.PHONY: all clean build build-ci init

all: init build

clean:
	rm -fr .docusaurus/ build/ node_modules/

build:
	npm run build

init:
	npm install
