{
    "quiz": {
        "name": "Continuous Delivery and Process Automation ",
            "logo" : "assets/img/S3.png",
                "time":"20 minutes"
    },
    "questions": [
        {
            "Id": 1,
            "Name": "When an Auto Scaling group is running in Amazon Elastic Compute Cloud (EC2), your application rapidly scales up and down in response to load within a 10-minute window; however, after the load peaks, you begin to see problems in your configuration management system where previously terminated Amazon EC2 resources are still showing as active. What would be a reliable and efficient way to handle the cleanup of Amazon EC2 resources within your configuration management system? Choose 2 answers",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Write a script that is run by a daily cron job on an Amazon EC2 instance and that executes API Describe calls of the EC2 Auto Scaling group and removes terminated instances from the configuration management system.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure an Amazon Simple Queue Service (SQS) queue for Auto Scaling actions that has a script that listens for new messages and removes terminated instances from the configuration management system.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use your existing configuration management system to control the launching and bootstrapping of instances to reduce the number of moving parts in the automation.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Write a small script that is run during Amazon EC2 instance shutdown to de-register the resource from the configuration management system.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow Service (SWF) to maintain an Amazon DynamoDB database that contains a whitelist of instances that have been previously launched, and allow the Amazon SWF worker to remove information from the configuration management system.", "IsAnswer": false }]
        },
        {
            "Id": 2,
            "Name": "You are administering a continuous integration application that polls version control for changes and then launches new Amazon EC2 instances for a full suite of build tests. What should you do to ensure the lowest overall cost while being able to run as many tests in parallel as possible?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new Amazon EC2 instance for build test, unit and integration tests.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Perform syntax and build tests on the continuous integration system before launching the new Amazon EC2 instance unit and integration tests.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Perform all tests on the continuous integration system, using AWS OpsWorks for unit, integration, and build tests.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new AWS Data Pipeline for coordinating the output of unit, integration, and build tests.", "IsAnswer": false }],
            "Explanation": "Use a CI server like Jenkins to build and test code before spinning new EC2 instances."
        },
        {
            "Id": 3,
            "Name": "Your application is currently running on Amazon EC2 instances behind a load balancer. Your management has decided to use a Blue/Green deployment strategy. How should you implement this for each deployment?",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Set up Amazon Route 53 health checks to fail over from any Amazon EC2 instance that is currently being deployed to.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS CloudFormation, create a test stack for validating the code, and then deploy the code to each production Amazon EC2 instance.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a new load balancer with new Amazon EC2 instances, carry out the deployment, and then switch DNS over to the new load balancer using Amazon Route 53 after testing.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Launch more Amazon EC2 instances to ensure high availability, de-register each Amazon EC2 instance from the load balancer, upgrade it, and test it, and then register it again with the load balancer.", "IsAnswer": false }],
            "Explanation": "For Blue/Green deployment, you have to have another enovironment that mirrors the current one. Do DNS (Route 53) switch to divert traffic from one environment to the other. "
        },
        {
            "Id": 4,
            "Name": "You are using AWS Elastic Beanstalk to deploy your application and must make data stored on an Amazon Elastic Block Store (EBS) volume snapshot available to the Amazon Elastic Compute Cloud (EC2) instances. How can you modify your Elastic Beanstalk environment so that the data is added to the Amazon EC2 instances every time you deploy your application?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Add commands to a configuration file in the .ebextensions folder of your deployable archive that mount an additional Amazon EBS volume on launch. Also add a 'BlockDeviceMappings' option, and specify the snapshot to use for the block device in the Auto Scaling launch configuration.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Add commands to a configuration file in the .ebextensions folder of your deployable archive that uses the create-volume Amazon EC2 API or CLI to create a new ephemeral volume based on the specified snapshot and then mounts the volume on launch.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Add commands to the Amazon EC2 user data that will be executed by eb-init, which uses the create- volume Amazon EC2 API or CLI to create a new Amazon EBS volume based on the specified snapshot, and then mounts the volume on launch.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Add commands to the Chef recipe associated with your environment, use the create-volume Amazon EC2 API or CLI to create a new Amazon EBS volume based on the specified snapshot, and then mount the volume on launch.", "IsAnswer": false }],
            "Explanation": "Use the .ebextensions folder for advanced configuration. Creating an ephemeral volume does not satisfy the durability requirement of this use case. See link for additional information.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html"
        } ,
        {
            "Id": 5,
            "Name": "Your DevOps team is responsible for a multi-tier, Windows-based web application consisting of web servers, Amazon RDS database instances, and a load balancer behind Amazon Route53. You've been asked by your manager to build a cost-effective rolling deployment solution for this web application. What method should you use?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Re-deploy your application on an AWS OpsWorks stack. Use the AWS OpsWorks done stack feature to allow updates between duplicate stacks.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your application on Elastic Beanstalk and take advantage of Elastic BeanStalk rolling updates.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application using an AWS CloudFormation template, launch a new AWS CloudFormation stack during each deployment, and then tear down the old stack.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your application using an AWS CloudFormation template. Use AWS CloudFormation rolling deployment policies, create a new policy for your AWS CloudFormation stack, and initiate an update stack operation to deploy new code.", "IsAnswer": true }],
            "Explanation": "Use Cloudformation with the 'AutoScalingRollingUpdate' policy. See link for more information.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html"
        }  ,
        {
            "Id": 6,
            "Name": "You recently encountered a major bug in your Windows-based web application during a deployment cycle. During this failed deployment, it took the team four hours to roll back to a previously working state, which left customers with a poor user experience. During the post-mortem, your team discussed the need to provide a quicker way to roll back failed deployments. You currently run your web application on Amazon EC2 using Windows 2012R2 and use Elastic Load Balancing for your load balancing needs. Which technique should you use to solve this problem?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create deployable versioned bundles of your application. Store the bundles on Amazon S3. Re-deploy your web application on Elastic Beanstalk, and enable the Elastic Beanstalk auto- rollback feature tied to CloudWatch metrics that define failure.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your web application using an AWS OpsWorks stack, and use the AWS OpsWorks auto-rollback feature to initiate a rollback during failures.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create deployable versioned bundles of your application. Store the bundle on Amazon S3. Re-deploy your web application using an AWS OpsWorks stack, and use AWS OpsWorks application versioning to initiate a rollback during failures.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your web application using Elastic Beanstalk, and use the Elastic Beanstalk application versions when deploying. During failures, re-deploy the previous version to the Elastic Beanstalk environment.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Re-deploy your web application using Elastic Beanstalk, and use the Elastic Beanstalk API to trigger a FailedDeployment API call to initiate a rollback to the previous version.", "IsAnswer": false }],
            "Explanation": "Elastic Beanstalk enables easy rollback for failed deployments. See link for more information.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.deploy-existing-version.html"
        } ,
        {
            "Id": 7,
            "Name": "Your organization has decided to implement a third-party configuration management tool that uses a master server from which nodes pull configuration. You have built a custom base Amazon Machine Image that already has the third-party configuration management agent installed. You want to use the same base AMI in Development, Test and Production environments, each of which has its own master server. How should you configure your Amazon EC2 instances to register with the correct master server on launch?",
            "Tag": "cs&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a tag for all instances that specifies their environment. When launching instances, provide an Amazon EC2 UserData script that gets this tag by querying the MetaData Service and registers the agent with the master.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon CloudFormation to describe your environment. Configure an input parameter for the master server hostname/address, and use this parameter within an Amazon EC2 UserData script that registers the agent with the master.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a script on your third-party configuration management master server that queries the Amazon EC2 API for new instances and registers them with it.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow Service to automate the process of registering new instances with your master server. Use an Environment tag in Amazon EC2 to register instances with the correct master server.", "IsAnswer": false }],
            "Explanation": "Refer the best practices link for implementing a third-party Configuration Management solution like Chef, Puppet, Ansible or Salt on AWS.",
            "Ref": "https://aws.amazon.com/answers/configuration-management/aws-infrastructure-configuration-management/"
        }  ,
        {
            "Id": 8,
            "Name": "You have been asked to handle a large data migration from multiple Amazon RDS MySQL instances to a DynamoDB table. You have been given a short amount of time to complete the data migration. What will allow you to complete this complex data processing workflow?",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon Kinesis data stream, pipe in all of the Amazon RDS data, and direct the data toward a DynamoDB table.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Write a script in your language of choice, install the script on an Amazon EC2 instance, and then use Auto Scaling groups to ensure that the latency of the migration pipelines never exceeds four seconds in any 15- minute period.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Write a bash script to run on your Amazon RDS instance that will export data into DynamoDB.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a data pipeline to export Amazon RDS data and import the data into DynamoDB.", "IsAnswer": true }],
            "Explanation": "Use AWS Data Piepline. AWS Data Pipeline is a web service that you can use to automate the movement and transformation of data. With AWS Data Pipeline, you can define data-driven workflows, so that tasks can be dependent on the successful completion of previous tasks. You define the parameters of your data transformations and AWS Data Pipeline enforces the logic that you've set up.",
            "Ref": "http://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html"
        },
        {
            "Id": 9,
            "Name": "Your application requires a fault-tolerant, low-latency and repeatable method to load configurations files via Auto Scaling when Amazon Elastic Compute Cloud (EC2) instances launch. Which approach should you use to satisfy these requirements?",
            "Tag": "cs&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Securely copy the content from a running Amazon EC2 instance.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use an Amazon EC2 UserData script to copy the configurations from an Amazon Storage Services (S3) bucket.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Use a script via cfn-init to pull content hosted in an Amazon ElastiCache cluster.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use a script via cfn-init to pull content hosted on your on-premises server.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use an Amazon EC2 UserData script to pull content hosted on your on-premises server.", "IsAnswer": false }],
            "Explanation": "Note that the cf-init is a Python helper script used to retrieve and interpret the resource metadata, installing packages, creating files and starting services. Here the requirement is to load config files via AS on EC2 launch.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html"
        }  ,
        {
            "Id": 10,
            "Name": "Your team is responsible for an AWS Elastic Beanstalk application. The business requires that you move to a continuous deployment model, thus releasing updates to the application multiple times per day with zero downtime. What should you do to enable this and still be able to roll back to the previous version almost immediately in an emergency?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Enable rolling updates in the Elastic Beanstalk environment and set an appropriate pause time for application startup.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a second Elastic Beanstalk environment that runs the new application version, and swap the environment CNAMEs", "IsAnswer": false},
                { "Id": 1057, "QuestionId": 1010, "Name": "Configure the application to poll for a new application version in your code repository; download and install the new version to each running Elastic Beanstalk instance.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a second Elastic Beanstalk environment with the new application version, and configure the old environment to use the HTTP 301 response code to redirect clients to the new environment.", "IsAnswer": false }],
            "Explanation": "You can enable and configure rolling updates in the Elastic Beanstalk Management Console. See link for details.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.html"
        } ,
        {
            "Id": 11,
            "Name": "If I want CloudFormation stack status updates to show up in a continuous delivery system in as close to real time as possible, how should I achieve this?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a long-poll on the Resources object in your CloudFormation stack and display those state changes in the UI for the system.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use a long-poll on the 'ListStacks' API call for your CloudFormation stack and display those state changes in the UI for the system.", "IsAnswer": false},
                { "Id": 1057, "QuestionId": 1010, "Name": "Subscribe your continuous delivery system to an SNS topic that you also tell your CloudFormation stack to publish events into.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Subscribe your continuous delivery system to an SQS queue that you also tell your CloudFormation stack to publish events into.", "IsAnswer": false }],
            "Explanation": "Use NotificationARNs.member.N when making a CreateStack call to push stack events into SNS in nearly real-time.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-monitor-stack.html"
        }

    ]
}