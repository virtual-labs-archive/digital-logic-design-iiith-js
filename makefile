SHELL := /bin/bash
PWD=$(shell pwd)
SRC_DIR=${PWD}/src
BUILD_DIR=${PWD}/build
SRIP_DIR=${PWD}/srip-quiz
THEME=green-icon
STATUS=0

all: get-quiz-lib clean-build build 

init:
	./init.sh

get-quiz-lib: init 

build: clean-build create-build-dir copy-lab-sources copy-libs copy-quiz copy-lab-theme
	
create-build-dir:
	mkdir -p ${BUILD_DIR}

copy-lab-sources:
	cp -rf ${SRC_DIR}/lab/* ${BUILD_DIR}

copy-libs:
	cp -rf ${SRC_DIR}/libs ${BUILD_DIR}

copy-quiz:
	cp -rf ${SRC_DIR}/quiz ${BUILD_DIR}

copy-lab-theme:
	cp -rf ${SRC_DIR}/themes/${THEME}/* ${BUILD_DIR}

clean-build:
	rm -rf ${BUILD_DIR}

clean-srip-quiz:
	rm -rf ${SRIP_DIR}

run:
	cd ${BUILD_DIR};python -m SimpleHTTPServer 8000

