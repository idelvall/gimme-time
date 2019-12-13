#! /bin/bash

npm install -g serverless

serverless deploy --stage $env --package target/$env -v -r eu-west-1
