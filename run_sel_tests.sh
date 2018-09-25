#!/bin/bash -ex
echo start

echo "\\/ \\/ \\/ CHECK FOR ENV VARS HERE \\/ \\/ \\/"
echo "$GEOAXIS_USERNAME"
echo "^  ^  ^  CHECK FOR ENV VARS HERE  ^  ^  ^"

pushd `dirname $0` > /dev/null
base=$(pwd -P)
popd > /dev/null

# Initialize "bigLatch".  If anything fails, this should be set to 1,
# so that the overall job exists with failure.
bigLatch=0
# Get the "spaces" environment variable, the spcae that the tests will be run against.
# If it is "test", that should mean that a change was made to the pztest-integration repo,
# and all spaces should be tested.


# Selenium Configurations:


echo "RUN TESTS ON FIREFOX"



		# Run the Firefox Selenium tests.
		./node_modules/.bin/nightwatch --config ./nightwatchFirefox.json -e firefox tests || { latch=1; }
		# Remember that there was an overall failure, if a single iteration has a failure.
		if [ "$latch" -eq "1" ]; then
			bigLatch=1
		fi
echo "RUN TESTS ON CHROME"
		# Run the Chrome Selenium tests.  
		./node_modules/.bin/nightwatch --config ./nightwatchChrome.json -e chrome tests || { latch=1; }
		# Remember that there was an overall failure, if a single iteration has a failure.
		if [ "$latch" -eq "1" ]; then
			bigLatch=1
		fi


# Return an overall error if any collections failed.
exit $bigLatch