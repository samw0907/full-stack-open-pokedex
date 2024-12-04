OK, lets say we are using Java for this small simple hypothetical project.

Options for Java linting tools include Checkstyle, PMD and Spotbugs.
When it comes to testing JUnit is one of  the more popular frameworks for unit testing. Mockito is an option that also supports mocking in tests. TestNG and Cucumber are popular for end to end testing and behavior driven development (BDD).
For building Maven and Gradle are the most popular options, both having dependency management, compilation, and packaging capabilities.

Some alternatives to Jenkins for self-hosted setups include GitLab CI/CD, TeamCity, GoCD, Drone CI, Buildbot, Buddy, Buildkite, Concourse CI and Hudson.

Some alternatives to Github Actions for cloud-based setups include CircleCI, Travis CI, GitLab CI/CD, Bitbucket Pipelines, AWS CodeBuild, Google CLoud Build, Azure Pipeline, Codefresh, Semaphore and Harness CI

To decide between a self-hosted or cloud-based environment we need to know to know if the project has any special requirements (i.e if we need to extra flexibility of self-hosting, or to make use of specific hardware like a GPU) and the time it takes to build the project (which i presume is linked to project size and complexity).

As this is small scale and simple project and won't have any special requirements that require a self-hosted setup, a cloud-based environment such as Github Actions would be the best choice. This would have the benefits of a simple configuration, saving on the hassle and resources of setting up our own configuration, and would most likely be the cheaper of the options.