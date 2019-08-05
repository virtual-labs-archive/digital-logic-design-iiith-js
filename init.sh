#!/bin/bash

branchName="develop"

if [ -d srip-quiz ]; then
    echo "srip-quiz already present"
    (cd srip-quiz; git checkout $branchName; git pull origin $branchName)
    echo "Copy quiz template"
    (cd srip-quiz; cp -rf src/*.html ../src/lab; cp -rf src/*.html ../src/lab/exp*)
    # echo "Copy quiz json"
    # (cd srip-quiz; cp -rf src/*.json ../src/lab; cp -rf src/*.json ../src/lab/exp*)
    echo "Create quiz directory"
    (cd src; mkdir -p quiz)
    echo "Copy quiz sources to quiz directory"
    (cd srip-quiz/src; cp -rf *.js *.css *.json ../../src/quiz)

else
    echo "Cloning quiz"
    git clone -b $branchName https://github.com/virtual-labs/srip-quiz.git
    echo "Copy quiz template"
    (cd srip-quiz; cp -rf src/*.html ../src/lab; cp -rf src/*.html ../src/lab/exp*)
    # echo "Copy quiz json"
    # (cd srip-quiz; cp -rf src/*.json ../src/lab; cp -rf src/*.json ../src/lab/exp*)
    echo "Create quiz directory"
    (cd src; mkdir -p quiz)
    echo "Copy quiz sources to quiz directory"
    (cd srip-quiz/src; cp -rf *.js *.css *.json ../../src/quiz)
fi


