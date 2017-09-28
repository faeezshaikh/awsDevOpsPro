{
    "quiz": {
        "name": "Exam 1",
            "logo" : "assets/img/EC2.png",
                "time":"120 minutes"
    },
    "questions": [
      
        {
            "Id": 56,
            "Name": "Currently, your deployment process consists of setting your load balancer to point to a maintenance page, turning off the web application servers, deploying your code, turning the web application servers back on, and removing the maintenance page. Working with your development team, you've agreed that performing rolling deployments of your software would provide a better user experience and a more agile deployment process. Which techniques could you use to provide a cost-effective rolling deployment process? Choose 2 answers.",
            "Tag": "cs&pa / ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use the Amazon Elastic Cloud Compute (EC2) API to write a service to return a list of servers based on the tags for the application that needs deployment, and use Amazon Simple Queue Service to queue up all servers for a rolling deployment.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your application on AWS Elastic Beanstalk, and use Elastic Beanstalk rolling deployments.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application on an AWS OpsWorks stack, and take advantage of OpsWorks rolling deployments.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your application using an AWS CloudFormation template, launch a new CloudFormation stack during each deployment, and then tear down the old stack.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Re-deploy your application using an AWS CloudFormation template with Auto Scaling group, and use update policies to provide rolling updates.", "IsAnswer": true},
                { "Id": 1060, "QuestionId": 1010, "Name": "Using Amazon Simple Workflow Service, create a workflow application that talks to the Amazon EC2 API to deploy your new code in a rolling fashion.", "IsAnswer": false }]

        }
        ,
        {
            "Id": 61,
            "Name": "You have been asked to use your departments existing continuous Integration (CI) tool to test a three-tier web architecture defined In an AWS CloudFormation template. The tool already supports AWS APIs and can launch new AWS CloudFormation stacks after polling version control. The CI tool reports on the success of the AWS CloudFormation stack creation by using the Describe Stacks API to look for the CREATE COMPLETE status. The architecture tiers defined in the template consist of: - One load balancer - Five Amazon EC2 instances running the web application - One multi-AZ Amazon RDS instance How would you implement this? Choose 2 answers",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Define a 'WaitCondition' and a' WaitConditionHandle' for the output of a UserData command that does sanity checking of the application's post-install state.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Define a CustomResource and write a script that runs architecture-level Integration tests through the load balancer to the application and database for the state of multiple tiers.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Define a WaitCondition and use a WaitConditionHandle that leverages the AWS SDK to run the DescribeStacks API call until the CREATE COMPLETE status is returned.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Define a CustomResource that leverages the AWS SDK to run the DescribeStacks API call until the 'CREATE COMPLETE status is returned.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Define a UserDataHandle for the output of a UserData command that does sanity checking of the application's post-install state and runs integration tests on the state of multiple tiers through the load balancer to the application.", "IsAnswer": true},
                { "Id": 1060, "QuestionId": 1010, "Name": "Define a UserDataHandle for the output of a CustomResource that does sanity checking of the application's post-install state.", "IsAnswer": false }]
        }
       
      
       
        ,
        {
            "Id": 66,
            "Name": "You set up a scalable continuous integration platform on AWS. The platform consists of a master node that can delegate project build jobs to multiple slave nodes, all running on Amazon EC2. The build output will be stored in Amazon S3. You always have five slave nodes deployed. Each slave node can handle 10 build jobs simultaneously. Your master node publishes a custom Amazon CloudWatch metric with the name 'RunningBuildiobs' that Slows you to programmatically track how many build jobs are running across your platform. Which two configuration options will allow you to flexibly scale your platform to support more than 50 simultaneous build jobs while minimizing costs? Choose 2 answers",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Place your fleet of slave nodes in an Auto Scaling group. Configure a CloudWatch alarm that triggers an Auto Scaling policy to launch Amazon EC2 Instances when 'RunningBuildJobs' is greater than 45 for more than five minutes.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure a CloudWatch alarm that sends an alert when 'RunningBuildJobs' is greater than 45 for more than five minutes. Use Amazon Simple Queue Service to process additional build jobs when the CloudWatch alarm is triggered.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Configure your fleet of slave nodes to fully utilize all of your purchased Amazon EC2 Heavy Utilization Reserved Instances. Configure a CloudWatch alarm that launches new Amazon EC2 instances when 'RunningBuildJobs' is less than 40 for more than five minutes.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Run your fleet of slave nodes in an Auto Scaling group. Configure a Cloudwatch alarm that launches new Amazon EC2 Dedicated Instances when 'RunningBuildJobs' is less than 40 for more than five minutes.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Place your fleet of slave nodes in an Auto Scaling group. Configure a CloudWatch alarm that triggers an Auto Scaling policy to terminate Amazon EC2 instances when 'RunningBuildJobs' is less than 40 for more than five minutes.", "IsAnswer": true }],
            "Explanation": "Notice using these two options you are letting the AS policy to terminate Amazon EC2 instances when 'RunningBuildJobs' is less than 40 for more than five minutes AND launch Amazon EC2 Instances when 'RunningBuildJobs' is greater than 45 for more than five minutes."
        }
      
        ,
        {
            "Id": 68,
            "Name": "You are responsible for a large-scale video transcoding system that operates with an Auto Scaling group of video transcoding workers. The Auto Scaling group is configured with a minimum of 750 Amazon EC2 instances and a maximum of 1000 Amazon EC2 instances. You are using Amazon SQS to pass a message containing the URI for a video stored in Amazon S3 to the transcoding workers. An Amazon CloudWatch alarm has notified you that the queue depth is becoming very large. How can you resolve the alarm without the risk of increasing the time to transcode videos? Choose 2 answers.",
            "Tag": "ha&elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a second queue in Amazon SQS.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Adjust the Amazon CloudWatch alarms for a higher queue depth.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a new Auto Scaling group with a launch configuration that has a larger Amazon EC2 instance type", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Add an additional Availability Zone to the Auto Scaling group configuration.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Change the Amazon CloudWatch alarm so that it monitors the CPU utilization of the Amazon EC2 instances rather than the Amazon SQS queue depth.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Adjust the Auto Scaling group configuration to increase the maximum number of Amazon EC2 instances.", "IsAnswer": true }],
            "Explanation": "Notice the two correct options are about horizontal and vertical scaling. To Horizontally scale increase the maximum number of Amazon EC2 instances in the AS configuration and to vertically scale use larger EC2 instance types. "
        }
        ,
        {
            "Id": 69,
            "Name": "You have been tasked with deploying a solution for your company that will store images, which the marketing department will use for its campaigns. Employees are able to upload images via a web interface, and once uploaded, each image must be resized and watermarked with the company logo. Image resize and watermark is not time-sensitive and can be completed days after upload if required. How should you design this solution in the most highly available and cost-effective way?",
            "Tag": "elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure your web application to upload images to the Amazon Elastic Transcoder service. Use the Amazon Elastic Transcoder watermark feature to add the company logo as a watermark on your images and then to upload the final images into an Amazon S3 bucket.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure your web application to upload images to Amazon S3, and send the Amazon S3 bucket URI to an Amazon SQS queue. Create an Auto Scaling group and configure it to use Spot instances, specifying a price you are willing to pay. Configure the instances in this Auto Scaling group to poll the SQS queue for new images and then resize and watermark the image before uploading the final images into Amazon S3.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Configure your web application to upload images to Amazon S3, and send the S3 object URI to an Amazon SQS queue. Create an Auto Scaling launch configuration that uses Spot instances, specifying a price you are willing to pay. Configure the instances in this Auto Scaling group to poll the Amazon SQS queue for new images and then resize and watermark the image before uploading the new images into Amazon S3 and deleting the message from the Amazon SQS queue.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure your web application to upload images to the local storage of the web server. Create a cronjob to execute a script daily that scans this directory for new files and then uses the Amazon EC2 Service API to launch 10 new Amazon EC2 instances, which will resize and watermark the images daily.", "IsAnswer": false }],
            "Explanation": "There are two options that are fairly close to each other. The more correct answer is the one that deletes the messages from the SQS queues in order to meet the 'highly available and cost-effective' requriement."
        }
        ,
        {
            "Id": 70,
            "Name": "You run a small online consignment marketplace. Interested sellers complete an online application in order to allow them to sell their products on your website. Once approved, they can post their product using a custom interface. From that point, you manage the shopping cart process so that when a buyer decides to buy a product, you handle the billing and coordinate the shipping. Part of this process requires sending emails to the buyer and the seller at different stages. Your system has been running on AWS for a few months. Occasionally, products are shipped before payments are cleared and emails are sent out of order. Furthermore, sometimes credit cards are being charged twice. How can you resolve these problems?",
            "Tag": "elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use the Amazon Simple Queue Service (SQS), and use a different set of workers for each task.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use the Amazon Simple Workflow Service (SWF), and use a different set of workers for each task.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use the Simple Email Service (SES) to control the correct order of email delivery.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use the AWS Data Pipeline service to control the process flow of the various tasks.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use the Amazon Simple Queue Service (SQS), and use a single set of workers for each task.", "IsAnswer": false }],
            "Explanation": "To co-ordinate tasks here use AWS SWF. Amazon SWF helps developers build, run, and scale background jobs that have parallel or sequential steps. ",
            "Ref": "https://aws.amazon.com/swf/"
        }
        ,
        {
            "Id": 76,
            "Name": "A web application is being actively developed by multiple development teams within your organization. You have created a self-service portal-driven by AWS CloudFormation and the AWS APIs-that allows testers to select a code branch containing a new feature that they want to test. The portal will then provision an environment and deploy the right branch of code to it. Recently you have noticed that a large number of environments contain broken builds. You want to introduce a set of automated browser tests that are executed on a new environment before the environment is available to the tester. This way a tester does not waste time trying to test new features in a broken environment. Select a suitable way to implement such a feature into the existing self-service portal:",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Specify your automated tests in the 'tests' section of the AWS CloudFormation template. AWS CloudFormation will then execute the tests on your behalf as part of the environment build.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure a centralized test server that hosts an automated browser testing framework. Use an AWS CloudFormation custom resource to notify the centralized test server, via an Amazon SNS topic, that a new environment has been initialized. The centralized test server can then execute the tests before sending the results back to the AWS CloudFormation service.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Pass the test scripts to the cfn-init service via the 'tests' section of the AWS::CloudFormation::Init metadata. Cfn-init will then execute these tests and return the result to the AWS CloudFormation service.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure a centralized test server that hosts an automated browser testing framework. Include an Amazon SES email resource under the outputs section of your AWS CloudFormation template. This we send an email to your centralized test server, informing it that the environment is ready for tests.", "IsAnswer": false }]
        }    ,
        {
            "Id": 78,
            "Name": "You are building an AWS CloudFormation template for a multi-tier web application. The user data of your Linux web server resource contains a complex script that can take a long time to run. Which techniques could you use to ensure that these servers are fully configured and running before attaching them to the load balancer? Choose 2 answers",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Launch your Linux servers from a nested stack that is called from within the load balancer resource in your AWS CloudFormation template.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Add an AWS CloudFormation Wait Condition that depends on the web server resource. When the UserData script finishes on the web servers, use curl to send a signal the Wait Condition at http://169.254.169.254/waithandle/.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Add an AWS CloudFormation wait Condition that depends on the web server resource. When the UserData script finishes on the web servers, use curl to signal to the Wait Condition pre-signed URL that they are ready.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "In your AWS CloudFormation template, position the load balancer resource JSON block directly below your Linux server resource.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Add an AWS CloudFormation Wait Condition that depends on the web server resource. When the UserData script finishes on the web servers, use the command 'cfn-signal' to signal that they are ready.", "IsAnswer": true }],
            "Explanation": "The cfn-signal helper script signals AWS CloudFormation to indicate whether Amazon EC2 instances have been successfully created or updated. See link for additionl details",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-signal.html"
        }  ,
        {
            "Id": 79,
            "Name": "Customers have recently been complaining that your web application has randomly stopped responding. During a deep dive of your logs, the team has discovered a major bug in your new Java web application. This bug is causing a memory leak that eventually causes the application to crash. Your web application runs on Amazon EC2 and was built with AWS CloudFormation. Which techniques should you use to help detect these problems faster, as well as help eliminate the server's unresponsiveness? Choose 2 answers",
            "Tag": "mm&l / gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Update your AWS CloudFormation configuration and enable a CustomResource that uses cfn-signal to detect memory leaks.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Update your CloudWatch metric granularity config for all Amazon EC2 memory metrics to support five-second granularity. Create a CloudWatch alarm that triggers an Amazon SNS notification to page your team when the application memory becomes too large.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Update your AWS CloudFormation configuration to take advantage of Auto Scaling groups. Configure an Auto Scaling group policy to trigger off your custom CloudWatch metrics.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a custom CloudWatch metric that you push your JVM memory usage to create a Cloudwatch alarm that triggers an Amazon SNS notification to page your team when the application memory usage becomes too large.", "IsAnswer": true},
                { "Id": 1059, "QuestionId": 1010, "Name": "Update your AWS CloudFormation configuration to take advantage of CloudWatch metrics Agent. Configure the CloudWatch Metrics Agent to monitor memory usage and trigger an Amazon SNS alarm.", "IsAnswer": false }]
        }  ,
        {
            "Id": 80,
            "Name": "You have an ASP.NET web application running in Amazon Elastic Beanstalk. Your next version of the application requires a third-party Windows Installer package to be installed on the instance on first boot and before the application launches. Which options are possible? Choose 2 answers",
            "Tag": "elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "In the application's global.asax file, run msiexec.exe to install the package using process.start() in the Application Start event handler.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "In the source bundle's .ebextensions folder, create a file with a .config extension. In the file, under the 'packages' section and 'msi' package manager, include the package's URL.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Launch a new Amazon EC2 instance from the AMI used by the environment. Log into the instance, install the package and run sysprep. Create a new AMI. Configure the environment to use the new AMI.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "In the environment's configuration, edit the instances configuration and add the package's URL to the 'Packages' section.", "IsAnswer": true},
                { "Id": 1059, "QuestionId": 1010, "Name": "In the source bundle's .ebextensions folder, create a 'Packages' folder. Place the package in the folder.", "IsAnswer": false }],
            "Explanation": "See link for details on how to install a .NET app on Elastic Beanstalk",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.quickstart.html"
        }
        ,
        {
            "Id": 82,
            "Name": "You are hired as the new head of operations for a SaaS company. Your CTO has asked you to make debugging any part of your entire operation simpler and as fast as possible. She complains that she has no idea what is going on in the complex, service-oriented architecture, because the developers just log to disk, and it's very hard to find errors in logs on so many services. How can you best meet this requirement and satisfy your CTO?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Copy all log files into AWS S3 using a cron job on each instance. Use an S3 Notification Configuration on the 'PutBucket' event and publish events to AWS Lambda. Use the Lambda to analyze logs as soon as they come in and flag issues.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Begin using CloudWatch Logs on every service. Stream all Log Groups into S3 objects. Use AWS EMR cluster jobs to perform ad-hoc MapReduce analysis and write new queries when needed.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Copy all log files into AWS S3 using a cron job on each instance. Use an S3 Notification Configuration on the 'PutBucket' event and publish events to AWS Kinesis. Use Apache Spark on AWS EMR to perform at-scale stream processing queries on the log chunks and flag issues.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Begin using CloudWatch Logs on every service. Stream all Log Groups into an AWS Elasticsearch Service Domain running Kibana 4 and perform log analysis on a search cluster.", "IsAnswer": true}],
            "Explanation": "The Elasticsearch and Kibana 4 combination is called the ELK Stack, and is designed specifically for real-time, ad-hoc log analysis and aggregation. All other answers introduce extra delay or require pre-defined queries. Amazon Elasticsearch Service is a managed service that makes it easy to deploy, operate, and scale Elasticsearch in the AWS Cloud. Elasticsearch is a popular open-source search and analytics engine for use cases such as log analytics, real-time application monitoring, and click stream analytics.",
            "Ref": "https://aws.amazon.com/elasticsearch-service/"
        }
        ,
        {
            "Id": 83,
            "Name": "When thinking of AWS Elastic Beanstalk's model, which is true?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Applications have many deployments, deployments have many environments.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Environments have many applications, applications have many deployments.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Applications have many environments, environments have many deployments.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Deployments have many environments, environments have many applications.", "IsAnswer": false }],
            "Explanation": "Applications group logical services. Environments belong to Applications, and typically represent different deployment levels (dev, stage, prod, fo forth). Deployments belong to environments, and are pushes of bundles of code for the environments to run.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html"
        }
     
        ,
        {
            "Id": 85,
            "Name": "You are designing a system which needs, at minumum, 8 m4.large instances operating to service traffic. When designing a system for high availability in the us-east-1 region, which has 6 Availability Zones, you company needs to be able to handle death of a full availability zone. How should you distribute the servers, to save as much cost as possible, assuming all of the EC2 nodes are properly linked to an ELB? Your VPC account can utilize us-east-1's AZ's a through f, inclusive.",
            "Tag": "ha&elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "3 servers in each of AZ's a through d, inclusive.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "8 servers in each of AZ's a and b.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "2 servers in each of AZ's a through e, inclusive.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "4 servers in each of AZ's a through c, inclusive.", "IsAnswer": false }],
            "Explanation": "You need to design for N+1 redundancy on Availability Zones. ZONE_COUNT = (REQUIRED_INSTANCES / INSTANCE_COUNT_PER_ZONE) + 1. To minimize cost, spread the instances across as many possible zones as you can. By using a though e, you are allocating 5 zones. Using 2 instances, you have 10 total instances. If a single zone fails, you have 4 zones left, with 2 instances each, for a total of 8 instances. By spreading out as much as possible, you have increased cost by only 25% and significantly de-risked an availability zone failure.",
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions-availability-zones"
        }
       ,
        {
            "Id": 87,
            "Name": "What is web identity federation?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use of an identity provider like Google or Facebook to become an AWS IAM User.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use of an identity provider like Google or Facebook to exchange for temporary AWS security credentials.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use of AWS IAM User tokens to log in as a Google or Facebook user.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use of AWS STS Tokens to log in as a Google or Facebook user.", "IsAnswer": false }],
            "Explanation": "Web Id Federation is where users of your app can sign in using a well-known identity provider (IdP) --such as Login with Amazon, Facebook, Google, or any other OpenID Connect (OIDC)-compatible IdP, receive an authentication token, and then exchange that token for temporary security credentials in AWS that map to an IAM role with permissions to use the resources in your AWS account.",
            "Ref": "http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html"
        } ,
        {
            "Id": 88,
            "Name": "You have been asked to de-risk deployments at your company. Specifically, the CEO is concerned about outages that occur because of accidental inconsistencies between Staging and Production, which sometimes cause unexpected behaviors in Production even when Staging tests pass. You already use Docker to get high consistency between Staging and Production for the application environment on your EC2 instances. How do you further de-risk the rest of the execution environment, since in AWS, there are many service components you may use beyond EC2 virtual machines?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Develop models of your entire cloud system in CloudFormation. Use this model in Staging and Production to achieve greater parity.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS Config to force the Staging and Production stacks to have configuration parity. Any differences will be detected for you so you are aware of risks.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use AMIs to ensure the whole machine, including the kernel of the virual machines, is consistent, since Docker uses Linux Container (LXC) technology, and we need to make sure the container environment is consistent.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS ECS and Docker clustering. This will make sure that the AMIs and machine sizes are the same across both environments.", "IsAnswer": false }],
            "Explanation": "CloudFormation's JSON Templates allow declarative version control of repeatably deployable models of entire AWS clouds.",
            "Ref": "https://blogs.aws.amazon.com/application-management/blog/category/Best+practices"
        } ,
        {
            "Id": 89,
            "Name": "You are creating a new API for video game scores. Reads are 100 times more common than writes, and the top 1% of scores are read 100 times more frequently than the rest of the scores. What's the best design for this system, using DynamoDB?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB table with 100x higher read than write throughput, with CloudFront caching.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB table with roughly equal read and write throughput, with CloudFront caching.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB table with 100x higher read than write throughput, with ElastiCache caching.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "DynamoDB table with roughly equal read and write throughput, with ElastiCache caching.", "IsAnswer": true }],
            "Explanation": "Because the 100x read ratio is mostly driven by a small subset, with caching, only a roughly equal number of reads to writes will miss the cache, since the supermajority will hit the top 1% scores. Knowing we need to set the values roughly equal when using caching, we select AWS ElastiCache, because CloudFront cannot directly cache DynamoDB queries, and ElastiCache is an excellent in-memory cache for database queries, rather than a distributed proxy cache for content delivery. ... One solution would be to cache these reads at the application layer. Caching is a technique that is used in many high-throughput applications, offloading read activity on hot items to the cache rather than to the database. Your application can cache the most popular items in memory, or use a product such as ElastiCache to do the same.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GuidelinesForTables.html# GuidelinesForTables.CachePopularItem"
        } ,
        {
            "Id": 90,
            "Name": "You were just hired as a DevOps Engineer for a startup. Your startup uses AWS for 100% of their infrastructure. They currently have no automation at all for deployment, and they have had many failures while trying to deploy to production. The company has told you deployment process risk mitigation is the most important thing now, and you have a lot of budget for tools and AWS resources. Their stack:- 2-tier API, Data stored in DynamoDB or S3, (depending on type), Compute layer is EC2 in Auto Scaling Groups, They use Route53 for DNS pointing to an ELB, An ELB balances load across the EC2 instances. The scaling group properly varies between 4 and 12 EC2 servers. Which of the following approaches, given this company's stack and their priorities, best meets the company's needs?",
            "Tag": "ha, elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Model the stack in AWS Elastic Beanstalk as a single Application with multiple Environments. Use Elastic Beanstalk's Rolling Deploy option to progressively roll out application code changes when promoting across environments.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Model the stack in 3 CloudFormation templates: Data layer, compute layer, and networking layer. Write stack deployment and integration testing automation following Blue-Green methodologies.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Model the stack in AWS OpsWorks as a single Stack, with 1 compute layer and its associated ELB. Use Chef and App Deployments to automate Rolling Deployment.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Model the stack in 1 CloudFormation template, to ensure consistency and dependency graph resolution. Write deployment and integration testing automation following Rolling Deployment methodologies.", "IsAnswer": false }],
            "Explanation": "AWS recommends Blue-Green for zero-downtime deploys. Since you use DynamoDB, and neither AWS OpsWorks nor AWS Elastic Beanstalk directly supports DynamoDB, the option selecting CloudFormation and Blue-Green is correct. You use various strategies to migrate the traffic from your current application stack (blue) to a new version of the application (green). This is a popular technique for deploying applications with zero downtime. The deployment services like AWS Elastic Beanstalk, AWS CloudFormation, or AWS OpsWorks are particularly useful as they provide a simple way to clone your running application stack. You can set up a new version of your application (green) by simply cloning current version of the application (blue).",
            "Ref": "https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf"
        },
        {
            "Id": 91,
            "Name": "What is the scope of an EBS snapshot?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Availability Zone", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Placement Group", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Region", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "VPC", "IsAnswer": false }],
            "Explanation": "An EBS snapshot is tied to its region and can only be used to create volumes in the same region. You can copy a snapshot from one region to another. For more information, see Copying an Amazon EBS Snapshot.",
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resources.html"
        },
        {
            "Id": 92,
            "Name": "Your system uses a multi-master, multi-region DynamoDB configuration spanning two regions to achieve high availablity. For the first time since launching your system, one of the AWS Regions in which you operate over went down for 3 hours, and the failover worked correctly. However, after recovery, your users are experiencing strange bugs, in which users on different sides of the globe see different data. What is a likely design issue that was not accounted for when launching?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The system does not have Lambda Functor Repair Automatons, to perform table scans and chack for corrupted partition blocks inside the Table in the recovered Region.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The system did not implement DynamoDB Table Defragmentation for restoring partition performance in the Region that experienced an outage, so data is served stale.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "The system did not include repair logic and request replay buffering logic for post-failure, to re- synchronize data to the Region that was unavailable for a number of hours.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "The system did not use DynamoDB Consistent Read requests, so the requests in different areas are not utilizing consensus across Regions at runtime.", "IsAnswer": false }],
            "Explanation": "When using multi-region DynamoDB systems, it is of paramount importance to make sure that all requests made to one Region are replicated to the other. Under normal operation, the system in question would correctly perform write replays into the other Region. If a whole Region went down, the system would be unable to perform these writes for the period of downtime. Without buffering write requests somehow, there would be no way for the system to replay dropped cross- region writes, and the requests would be serviced differently depending on the Region from which they were served after recovery.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.CrossRegionRepl .html"
        },
        {
            "Id": 93,
            "Name": "There are a number of ways to purchase compute capacity on AWS. Which orders the price per compute or memory unit from LOW to HIGH (cheapest to most expensive), on average? A) On-Demand B) Spot C) Reserved",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A, B, C", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "C, B, A", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "B, C, A", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "A, C, B", "IsAnswer": false }],
            "Explanation": "Spot instances are usually many, many times cheaper than on-demand prices. Reserved instances, depending on their term and utilization, can yield approximately 33% to 66% cost savings. On-Demand prices are the baseline price and are the most expensive way to purchase EC2 compute time.",
            "Ref": "https://d0.awsstatic.com/whitepapers/Cost_Optimization_with_AWS.pdf"
        },
        {
            "Id": 94,
            "Name": "You run operations for a company that processes digital wallet payments at a very high volume. One second of downtime, during which you drop payments or are otherwise unavailable, loses you on average USD 100. You balance the financials of the transaction system once per day. Which database setup is best suited to address this business risk?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "A multi-AZ RDS deployment with synchronous replication to multiple standbys and read-replicas for fast failover and ACID properties.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A multi-region, multi-master, active-active RDS configuration using database-level ACID design principles with database trigger writes for replication.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "A multi-region, multi-master, active-active DynamoDB configuration using application control-level BASE design principles with change-stream write queue buffers for replication.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "A multi-AZ DynamoDB setup with changes streamed to S3 via AWS Kinesis, for highly durable storage and BASE properties.", "IsAnswer": false }],
            "Explanation": "Only the multi-master, multi-region DynamoDB answer makes sense. Multi-AZ deployments do not provide sufficient availability when a business loses USD 360,000 per hour of unavailability. As RDS does not natively support multi-region, and ACID does not perform well/at all over large distances between regions, only the DynamoDB answer works.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.CrossRegionRepl .html"
        },
        {
            "Id": 95,
            "Name": "When thinking of DynamoDB, what are true of Local Secondary Key properties?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Either the partition key or the sort key can be different from the table, but not both.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Only the sort key can be different from the table.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "The partition key and sort key can be different from the table.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Only the partition key can be different from the table.", "IsAnswer": false }],
            "Explanation": "Local secondary index — an index that has the same partition key as the base table, but a different sort key. A local secondary index is 'local' in the sense that every partition of a local secondary index is scoped to a base table partition that has the same partition key value.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html"
        },
        {
            "Id": 96,
            "Name": "Which deployment method, when using AWS Auto Scaling Groups and Auto Scaling Launch Configurations, enables the shortest time to live for individual servers?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Pre-baking AMIs with all code and configuration on deploys.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using a Dockerfile bootstrap on instance launch.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Using UserData bootstrapping scripts.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using AWS EC2 Run Commands to dynamically SSH into fleets.", "IsAnswer": false }],
            "Explanation": "Note that the bootstrapping process can be slower if you have a complex application or multiple applications to install. Managing a fleet of applications with several build tools and dependencies can be a challenging task during rollouts. Furthermore, your deployment service should be designed to do faster rollouts to take advantage of Auto Scaling. Prebaking is a process of embedding a significant portion of your application artifacts within your base AMI. During the deployment process you can customize application installations by using EC2 instance artifacts such as instance tags, instance metadata, and Auto Scaling groups.",
            "Ref": "https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf"
        },
        {
            "Id": 97,
            "Name": "Which of these techniques enables the fastest possible rollback times in the event of a failed deployment?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Rolling; Immutable", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Rolling; Mutable", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Canary or A/B", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Blue-Green", "IsAnswer": true }],
            "Explanation": "AWS specifically recommends Blue-Green for super-fast, zero-downtime deploys - and thus rollbacks, which are redeploying old code. You use various strategies to migrate the traffic from your current application stack (blue) to a new version of the application (green). This is a popular technique for deploying applications with zero downtime.",
            "Ref": "https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf"
        },
        {
            "Id": 98,
            "Name": "Which of the following are not valid sources for OpsWorks custom cookbook repositories?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "HTTP(S)", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Git", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS EBS", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Subversion", "IsAnswer": false }],
            "Explanation": "Linux stacks can install custom cookbooks from any of the following repository types: HTTP or Amazon S3 archives. They can be either public or private, but Amazon S3 is typically the preferred option for a private archive. Git and Subversion repositories provide source control and the ability to have multiple versions.",
            "Ref": "http://docs.aws.amazon.com/opsworks/latest/userguide/workingcookbook-installingcustom- enable.html"
        }
        ,
        {
            "Id": 101,
            "Name": "For AWS Auto Scaling, what is the first transition state a new instance enters after leaving steady state when scaling out due to increased load?",
            "Tag": "elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "EnteringStandby", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Pending", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Terminating:Wait", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Detaching", "IsAnswer": false }],
            "Explanation": "When a scale out event occurs, the Auto Scaling group launches the required number of EC2 instances, using its assigned launch configuration. These instances start in the Pending state. If you add a lifecycle hook to your Auto Scaling group, you can perform a custom action here. For more information, see Lifecycle Hooks.",
            "Ref": "http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html"
        }
        ,
        {
            "Id": 102,
            "Name": "When a user is detaching an EBS volume from a running instance and attaching it to a new instance, which of the below mentioned options should be followed to avoid file system damage?",
            "Tag": "EBS",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Unmount the volume first", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Stop all the I/O of the volume before processing", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Take a snapshot of the volume before detaching", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Force Detach the volume to ensure that all the data stays intact", "IsAnswer": false }],
            "Explanation": "When a user is trying to detach an EBS volume, the user can either terminate the instance or explicitly remove the volume. It is a recommended practice to unmount the volume first to avoid any file system damage."
        }

        ,
        {
            "Id": 103,
            "Name": "A user is creating a new EBS volume from an existing snapshot. The snapshot size shows 10 GB. Can the user create a volume of 30 GB from that snapshot?",
            "Tag": "EBS",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Provided the original volume has set the change size attribute to true", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Yes", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Provided the snapshot has the modify size attribute set as true", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "No", "IsAnswer": false }],
            "Explanation": "A user can always create a new EBS volume of a higher size than the original snapshot size. The user cannot create a volume of a lower size. When the new volume is created the size in the instance will be shown as the original size. The user needs to change the size of the device with resize2fs or other OS specific commands."
        }

        ,
        {
            "Id": 104,
            "Name": "How long are the messages kept on an SQS queue by default?",
            "Tag": "sqs",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "If a message is not read, it is never deleted", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "2 weeks", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "1 day", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "4 days", "IsAnswer": true }],
            "Explanation": "The SQS message retention period is configurable and can be set anywhere from 1 minute to 2 weeks. The default is 4 days and once the message retention limit is reached your messages will be automatically deleted. The option for longer message retention provides greater flexibility to allow for longer intervals between message production and consumption.",
            "Ref": "http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-message-lifecycle.html"
        }

        ,
        {
            "Id": 105,
            "Name": "A user has attached an EBS volume to a running Linux instance as a '/dev/sdf' device. The user is unable to see the attached device when he runs the command 'df -h'. What is the possible reason for this?",
            "Tag": "ebs",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The volume is not in the same AZ of the instance", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The volume is not formatted", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "The volume is not attached as a root device", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "The volume is not mounted", "IsAnswer": true }],
            "Explanation": "When a user creates an EBS volume and attaches it as a device, it is required to mount the device. If the device/volume is not mounted it will not be available in the listing."
        }

        ,
        {
            "Id": 106,
            "Name": "In DynamoDB, a secondary index is a data structure that contains a subset of attributes from a table, along with an alternate key to support ______ operations.",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Both", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Query", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Scan", "IsAnswer": false }],
            "Explanation": "In DynamoDB, a secondary index is a data structure that contains a subset of attributes from a table, along with an alternate key to support Query operations.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html"
        }

        ,
        {
            "Id": 107,
            "Name": "A user has created a new EBS volume from an existing snapshot. The user mounts the volume on the instance to which it is attached. Which of the below mentioned options is a required step before the user can mount the volume?",
            "Tag": "EBS",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Run a cyclic check on the device for data consistency", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create the file system of the volume", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Resize the volume as per the original snapshot size", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "No step is required. The user can directly mount the device", "IsAnswer": true }],
            "Explanation": "When a user is trying to mount a blank EBS volume, it is required that the user first creates a file system within the volume. If the volume is created from an existing snapshot then the user needs not to create a file system on the volume as it will wipe out the existing data."
        }

        ,
        {
            "Id": 108,
            "Name": "You need your CI to build AMIs with code pre-installed on the images on every new code push. You need to do this as cheaply as possible. How do you do this?",
            "Tag": "CD&PA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Bid on spot instances just above the asking price as soon as new commits come in, perform all instance configuration and setup, then create an AMI based on the spot instance.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Have the CI launch a new on-demand EC2 instance when new commits come in, perform all instance configuration and setup, then create an AMI based on the on-demand instance.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Purchase a Light Utilization Reserved Instance to save money on the continuous integration machine. Use these credits whenever your create AMIs on instances.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "When the CI instance receives commits, attach a new EBS volume to the CI machine. Perform all setup on this EBS volume so you don't need a new EC2 instance to create the AMI.", "IsAnswer": false }],
            "Explanation": "Spot instances are the cheapest option, and you can use minimum run duration if your AMI takes more than a few minutes to create. Spot instances are also available to run for a predefined duration - in hourly increments up to six hours in length - at a significant discount (30-45%) compared to On-Demand pricing plus an additional 5% during off-peak times1 for a total of up to 50% savings.",
            "Ref": "https://aws.amazon.com/ec2/spot/pricing/"
        }

        ,
        {
            "Id": 109,
            "Name": "When thinking of DynamoDB, what are true of Global Secondary Key properties?",
            "Tag": "DynamoDB",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The partition key and sort key can be different from the table.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Only the partition key can be different from the table.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Either the partition key or the sort key can be different from the table, but not both.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Only the sort key can be different from the table.", "IsAnswer": false }],
            "Explanation": "Global secondary index -- an index with a partition key and a sort key that can be different from those on the table. A global secondary index is considered 'global' because queries on the index can span all of the data in a table, across all partitions.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html"
        }

        ,
        {
            "Id": 110,
            "Name": "You need to process long-running jobs once and only once. How might you do this?",
            "Tag": "elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use an SNS queue and set the visibility timeout to long enough for jobs to process.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use an SQS queue and set the reprocessing timeout to long enough for jobs to process.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use an SQS queue and set the visibility timeout to long enough for jobs to process.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use an SNS queue and set the reprocessing timeout to long enough for jobs to process.", "IsAnswer": false }],
            "Explanation": "The message timeout defines how long after a successful receive request SQS waits before allowing jobs to be seen by other components, and proper configuration prevents duplicate processing.",
            "Ref": "http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/MessageLifecycle.html"
        }

        ,
        {
            "Id": 111,
            "Name": "You are getting a lot of empty receive requests when using Amazon SQS. This is making a lot of unnecessary network load on your instances. What can you do to reduce this load?",
            "Tag": "SQS, SNS",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Subscribe your queue to an SNS topic instead.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use as long of a poll as possible, instead of short polls.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Alter your visibility timeout to be shorter.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use 'sqsd' on your EC2 instances.", "IsAnswer": false }],
            "Explanation": "One benefit of long polling with Amazon SQS is the reduction of the number of empty responses, when there are no messages available to return, in reply to a ReceiveMessage request sent to an Amazon SQS queue. Long polling allows the Amazon SQS service to wait until a message is available in the queue before sending a response.",
            "Ref": "http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html"
        }
       
        ,
        {
            "Id": 115,
            "Name": "Why are more frequent snapshots or EBS Volumes faster?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Blocks in EBS Volumes are allocated lazily, since while logically separated from other EBS Volumes, Volumes often share the same physical hardware. Snapshotting the first time forces full block range allocation, so the second snapshot doesn't need to perform the allocation phase and is faster.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The snapshots are incremental so that only the blocks on the device that have changed after your last snapshot are saved in the new snapshot.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS provisions more disk throughput for burst capacity during snapshots if the drive has been pre-warmed by snapshotting and reading all blocks.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "The drive is pre-warmed, so block access is more rapid for volumes when every block on the device has already been read at least one time.", "IsAnswer": false }],
            "Explanation": "After writing data to an EBS volume, you can periodically create a snapshot of the volume to use as a baseline for new volumes or for data backup. If you make periodic snapshots of a volume, the snapshots are incremental so that only the blocks on the device that have changed after your last snapshot are saved in the new snapshot. Even though snapshots are saved incrementally, the snapshot deletion process is designed so that you need to retain only the most recent snapshot in order to restore the volume.",
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html"
        }
        ,
        {
            "Id": 116,
            "Name": "For AWS CloudFormation, which stack state refuses UpdateStack calls?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "UPDATE_ROLLBACK_FAILED", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "UPDATE_ROLLBACK_COMPLETE", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "UPDATE_COMPLETE", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "CREATE_COMPLETE", "IsAnswer": false }],
            "Explanation": "When a stack is in the UPDATE_ROLLBACK_FAILED state, you can continue rolling it back to return it to a working state (to UPDATE_ROLLBACK_COMPLETE). You cannot update a stack that is in the UPDATE_ROLLBACK_FAILED state. However, if you can continue to roll it back, you can return the stack to its original settings and try to update it again.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-continueupdaterollback.html"
        }
        ,
        {
            "Id": 117,
            "Name": "You need to migrate 10 million records in one hour into DynamoDB. All records are 1.5KB in size. The data is evenly distributed across the partition key. How many write capacity units should you provision during this batch load?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "6667", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "4166", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "5556", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "2778", "IsAnswer": false }],
            "Explanation": "You need 2 units to make a 1.5KB write, since you round up. You need 20 million total units to perform this load. You have 3600 seconds to do so. Divide and round up for 5556.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ProvisionedThroughput.html"
        }
     
        ,
        {
            "Id": 119,
            "Name": "Which of these is not a Pseudo Parameter in AWS CloudFormation?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "AWS::StackName", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS::AccountId", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS::StackArn", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "AWS::NotificationARNs", "IsAnswer": false }],
            "Explanation": "This is the complete list of Pseudo Parameters: AWS::AccountId, AWS::NotificationARNs, AWS::NoValue, AWS::Region, AWS::StackId, AWS::StackName",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/pseudo-parameter- reference.html"
        }
        ,
        {
            "Id": 120,
            "Name": "What is the scope of an EBS volume?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "VPC", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Region", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Placement Group", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Availability Zone", "IsAnswer": true }],
            "Explanation": "Note that there is a similar question regarding scope of 'EBS snapshot'. An Amazon EBS volume is tied to its Availability Zone and can be attached only to instances in the same Availability Zone. The scope of 'EBS snapshot' is the 'Region'",
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resources.html"
        }

        ,
        {
            "Id": 121,
            "Name": "You are experiencing performance issues writing to a DynamoDB table. Your system tracks high scores for video games on a marketplace. Your most popular game experiences all of the performance issues. What is the most likely problem?",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB's vector clock is out of sync, because of the rapid growth in request for the most popular game.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "You selected the Game ID or equivalent identifier as the primary partition key for the table.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Users of the most popular video game each perform more read and write requests than average.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "You did not provision enough read or write throughput to the table.", "IsAnswer": false }],
            "Explanation": "The primary key selection dramatically affects performance consistency when reading or writing to DynamoDB. By selecting a key that is tied to the identity of the game, you forced DynamoDB to create a hotspot in the table partitions, and over-request against the primary key partition for the popular game. When it stores data, DynamoDB divides a table's items into multiple partitions, and distributes the data primarily based upon the partition key value. The provisioned throughput associated with a table is also divided evenly among the partitions, with no sharing of provisioned throughput across partitions.",
            "Ref": "http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GuidelinesForTables.html#"
        }
        ,
        {
            "Id": 122,
            "Name": "You meet once per month with your operations team to review the past month's data. During the meeting, you realize that 3 weeks ago, your monitoring system which pings over HTTP from outside AWS recorded a large spike in latency on your 3-tier web service API. You use DynamoDB for the database layer, ELB, EBS, and EC2 for the business logic tier, and SQS, ELB, and EC2 for the presentation layer. Which of the following techniques will NOT help you figure out what happened?",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Check your CloudTrail log history around the spike's time for any API calls that caused slowness.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Review CloudWatch Metrics graphs to determine which component(s) slowed the system down.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Review your ELB access logs in S3 to see if any ELBs in your system saw the latency.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Analyze your logs to detect bursts in traffic at that time.", "IsAnswer": false }],
            "Explanation": "Metrics data are available for 2 weeks. If you want to store metrics data beyond that duration, you can retrieve it using our GetMetricStatistics API as well as a number of applications and tools offered by AWS partners.",
            "Ref": "https://aws.amazon.com/cloudwatch/faqs/"
        }
        ,
        {
            "Id": 123,
            "Name": "Which of these is not an intrinsic function in AWS CloudFormation?",
            "Tag": "CloudFormation",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Fn::Split", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Fn::FindInMap", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Fn::Select", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Fn::GetAZs", "IsAnswer": false }],
            "Explanation": "This is the complete list of Intrinsic Functions...: Fn::Base64, Fn::And, Fn::Equals, Fn::If, Fn::Not, Fn::Or, Fn::FindInMap, Fn::GetAtt, Fn::GetAZs, Fn::Join, Fn::Select, Ref",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function- reference.html"
        }
        ,
        {
            "Id": 124,
            "Name": "For AWS CloudFormation, which is true?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Custom resources using SNS have a default timeout of 3 minutes.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Custom resources using SNS do not need a 'ServiceToken' property.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Custom resources using Lambda and 'ZipFile' allow inline nodejs resource composition.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Custom resources using Lambda do not need a 'ServiceToken' property", "IsAnswer": false }],
            "Explanation": "Code is a property of the AWS::Lambda::Function resource that enables you to specify the source code of an AWS Lambda (Lambda) function. You can point to a file in an Amazon Simple Storage Service (Amazon S3) bucket or specify your source code as inline text (for nodejs runtime environments only).",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lambda-function-code.html"
        }
        ,
        {
            "Id": 125,
            "Name": "Your API requires the ability to stay online during AWS regional failures. Your API does not store any state, it only aggregates data from other sources - you do not have a database. What is a simple but effective way to achieve this uptime goal?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a CloudFront distribution to serve up your API. Even if the region your API is in goes down, the edge locations CloudFront uses will be fine.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use an ELB and a cross-zone ELB deployment to create redundancy across datacenters. Even if a region fails, the other AZ will stay online.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a Route53 Weighted Round Robin record, and if one region goes down, have that region redirect to the other region.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a Route53 Latency Based Routing Record with Failover and point it to two identical deployments of your stateless API in two different regions. Make sure both regions use Auto Scaling Groups behind ELBs.", "IsAnswer": true}],
            "Explanation": "Latency Based Records allow request distribution when all is well with both regions, and the Failover component enables fallbacks between regions. By adding in the ELB and ASG, your system in the surviving region can expand to meet 100% of demand instead of the original fraction, whenever failover occurs.",
            "Ref": "http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html"
        }
        
        ,
        {
            "Id": 127,
            "Name": "You need to deploy an AWS stack in a repeatable manner across multiple environments. You have selected CloudFormation as the right tool to accomplish this, but have found that there is a resource type you need to create and model, but is unsupported by CloudFormation. How should you overcome this challenge?",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a CloudFormation Custom Resource Template by selecting an API call to proxy for create, update, and delete actions. CloudFormation will use the AWS SDK, CLI, or API method of your choosing as the state transition function for the resource type you are modeling.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Submit a ticket to the AWS Forums. AWS extends CloudFormation Resource Types by releasing tooling to the AWS Labs organization on GitHub. Their response time is usually 1 day, and they complete requests within a week or two.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Instead of depending on CloudFormation, use Chef, Puppet, or Ansible to author Heat templates, which are declarative stack resource definitions that operate over the OpenStack hypervisor and cloud environment.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a CloudFormation Custom Resource Type by implementing create, update, and delete functionality, either by subscribing a Custom Resource Provider to an SNS topic, or by implementing the logic in AWS Lambda.", "IsAnswer": true}],
            "Explanation": "Custom resources provide a way for you to write custom provisioning logic in AWS CloudFormation template and have AWS CloudFormation run it during a stack operation, such as when you create, update or delete a stack. For more information, see Custom Resources.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom- resources.html"
        }
        ,
        {
            "Id": 128,
            "Name": "You run a 2000-engineer organization. You are about to begin using AWS at a large scale for the first time. You want to integrate with your existing identity management system running on Microsoft Active Directory, because your organization is a power-user of Active Directory. How should you manage your AWS identities in the most simple manner?",
            "Tag": "Active Directory",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a large AWS Directory Service Simple AD.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use a large AWS Directory Service AD Connector.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use an Sync Domain running on AWS Directory Service.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use an AWS Directory Sync Domain running on AWS Lambda", "IsAnswer": false }],
            "Explanation": "You must use AD Connector as a power-user of Microsoft Active Directory. Simple AD only works with a subset of AD functionality. Sync Domains do not exist; they are made up answers. AD Connector is a directory gateway that allows you to proxy directory requests to your on-premises Microsoft Active Directory, without caching any information in the cloud. AD Connector comes in 2 sizes; small and large. A small AD Connector is designed for smaller organizations of up to 500 users. A large AD Connector is designed for larger organizations of up to 5,000 users.",
            "Ref": "https://aws.amazon.com/directoryservice/details/"
        }
        ,
        {
            "Id": 129,
            "Name": "When thinking of AWS OpsWorks, which of the following is not an instance type you can allocate in a stack layer?",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "24/7 instances", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot instances", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Time-based instances", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Load-based instances", "IsAnswer": false }],
            "Explanation": "AWS OpsWorks supports the following instance types, which are characterized by how they are started and stopped. 24/7 instances are started manually and run until you stop them.Time-based instances are run by AWS OpsWorks on a specified daily and weekly schedule. They allow your stack to automatically adjust the number of instances to accommodate predictable usage patterns. Load-based instances are automatically started and stopped by AWS OpsWorks, based on specified load metrics, such as CPU utilization. They allow your stack to automatically adjust the number of instances to accommodate variations in incoming traffic. Load-based instances are available only for Linux-based stacks.",
            "Ref": "http://docs.aws.amazon.com/opsworks/latest/userguide/welcome.html"
        }
        ,
        {
            "Id": 130,
            "Name": "Which of these is not a CloudFormation Helper Script?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "cfn-signal", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "cfn-hup", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "cfn-request", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "cfn-get-metadata", "IsAnswer": false }],
            "Explanation": "This is the complete list of CloudFormation Helper Scripts: cfn-init, cfn-signal, cfn-get-metadata, cfn-hup",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts- reference.html"
        }
        ,
        {
            "Id": 131,
            "Name": "Your team wants to begin practicing continuous delivery using CloudFormation, to enable automated builds and deploys of whole, versioned stacks or stack layers. You have a 3-tier, mission-critical system. Which of the following is NOT a best practice for using CloudFormation in a continuous delivery environment?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use the AWS CloudFormation 'ValidateTemplate' call before publishing changes to AWS.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Model your stack in one template, so you can leverage CloudFormation's state management and dependency resolution to propagate all changes.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudFormation to create brand new infrastructure for all stateless resources on each push, and run integration tests on that set of infrastructure.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Parametrize the template and use 'Mappings' to ensure your template works in multiple Regions.", "IsAnswer": false }],
            "Explanation": "Putting all resources in one stack is a bad idea, since different tiers have different life cycles and frequencies of change. For additional guidance about organizing your stacks, you can use two common frameworks: a multi-layered architecture and service-oriented architecture (SOA).",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#organizingstacks"
        }
        ,
        {
            "Id": 132,
            "Name": "You need to replicate API calls across two systems in real time. What tool should you use as a buffer and transport mechanism for API call events?",
            "Tag": "Kinesis",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "AWS SQS", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS Kinesis", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "AWS SNS", "IsAnswer": false }],
            "Explanation": "AWS Kinesis is an event stream service. Streams can act as buffers and transport across systems for in-order programmatic events, making it ideal for replicating API calls across systems. A typical Amazon Kinesis Streams application reads data from an Amazon Kinesis stream as data records. These applications can use the Amazon Kinesis Client Library, and they can run on Amazon EC2 instances. The processed records can be sent to dashboards, used to generate alerts, dynamically change pricing and advertising strategies, or send data to a variety of other AWS services. For information about Streams features and pricing, see Amazon Kinesis Streams.",
            "Ref": "http://docs.aws.amazon.com/kinesis/latest/dev/introduction.html"
        } ,
        {
            "Id": 133,
            "Name": "You are building a Ruby on Rails application for internal, non-production use which uses MySQL as a database. You want developers without very much AWS experience to be able to deploy new code with a single command line push. You also want to set this up as simply as possible. Which tool is ideal for this setup?",
            "Tag": "cd,pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "AWS CloudFormation", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS OpsWorks", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS ELB + EC2 with CLI Push", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "AWS Elastic Beanstalk", "IsAnswer": true}],
            "Explanation": "Elastic Beanstalk's primary mode of operation exactly supports this use case out of the box. It is simpler than all the other options for this question. With Elastic Beanstalk, you can quickly deploy and manage applications in the AWS cloud without worrying about the infrastructure that runs those applications. AWS Elastic Beanstalk reduces management complexity without restricting choice or control. You simply upload your application, and Elastic Beanstalk automatically handles the details of capacity provisioning, load balancing, scaling, and application health monitoring.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_Ruby_rails.html"
        } ,
        {
            "Id": 134,
            "Name": "",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        } ,
        {
            "Id": 135,
            "Name": "What is the scope of AWS IAM?",
            "Tag": "IAM",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Global", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Availability Zone", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Region", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Placement Group", "IsAnswer": false }],
            "Explanation": "IAM resources are all global; there is not regional constraint.",
            "Ref": "https://aws.amazon.com/iam/faqs/"
        } ,
        {
            "Id": 136,
            "Name": "You are building a mobile app for consumers to post cat pictures online. You will be storing the images in AWS S3. You want to run the system very cheaply and simply. Which one of these options allows you to build a photo sharing application without needing to worry about scaling expensive uploads processes, authentication/authorization and so forth?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Build the application out using AWS Cognito and web identity federation to allow users to log in using Facebook or Google Accounts. Once they are logged in, the secret token passed to that user is used to directly access resources on AWS, like AWS S3.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use JWT or SAML compliant systems to build authorization policies. Users log in with a username and password, and are given a token they can use indefinitely to make calls against the photo infrastructure.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use AWS API Gateway with a constantly rotating API Key to allow access from the client-side. Construct a custom build of the SDK and include S3 access in it.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create an AWS oAuth Service Domain ad grant public signup and access to the domain. During setup, add at least one major social media site as a trusted Identity Provider for users.", "IsAnswer": false }],
            "Explanation": "The short answer is that Amazon Cognito is a superset of the functionality provided by web identity federation. It supports the same providers, and you configure your app and authenticate with those providers in the same way. But Amazon Cognito includes a variety of additional features. For example, it enables your users to start using the app as a guest user and later sign in using one of the supported identity providers.",
            "Ref": "https://aws.amazon.com/blogs/security/how-does-amazon-cognito-relate-to-existing-web-identity-federation/"
        } ,
        {
            "Id": 137,
            "Name": "Your CTO has asked you to make sure that you know what all users of your AWS account are doing to change resources at all times. She wants a report of who is doing what over time, reported to her once per week, for as broad a resource type group as possible. How should you do this?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a global AWS CloudTrail Trail. Configure a script to aggregate the log data delivered to S3 once per week and deliver this to the CTO.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use CloudWatch Events Rules with an SNS topic subscribed to all AWS API calls. Subscribe the CTO to an email type delivery on this SNS Topic.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use AWS IAM credential reports to deliver a CSV of all uses of IAM User Tokens over time to the CTO.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS Config with an SNS subscription on a Lambda, and insert these changes over time into a DynamoDB table. Generate reports based on the contents of this table.", "IsAnswer": false }],
            "Explanation": "This is the ideal use case for AWS CloudTrail. CloudTrail provides visibility into user activity by recording API calls made on your account. CloudTrail records important information about each API call, including the name of the API, the identity of the caller, the time of the API call, the request parameters, and the response elements returned by the AWS service. This information helps you to track changes made to your AWS resources and to troubleshoot operational issues. CloudTrail makes it easier to ensure compliance with internal policies and regulatory standards.",
            "Ref": "https://aws.amazon.com/cloudtrail/faqs/"
        } ,
        {
            "Id": 138,
            "Name": "What is the order of most-to-least rapidly-scaling (fastest to scale first)? a) EC2 + ELB + Auto Scaling b) Lambda c) RDS",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "B, A, C", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "C, B, A", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "C, A, B", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "A, C, B", "IsAnswer": false }],
            "Explanation": "Lambda is designed to scale instantly. EC2 + ELB + Auto Scaling require single-digit minutes to scale out. RDS will take at least 15 minutes, and will apply OS patches or any other updates when applied.",
            "Ref": "https://aws.amazon.com/lambda/faqs/"
        } ,
        {
            "Id": 139,
            "Name": "Which is not a restriction on AWS EBS Snapshots?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Snapshots which are shared cannot be used as a basis for other snapshots.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "You cannot share a snapshot containing an AWS Access Key ID or AWS Secret Access Key.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "You cannot share unencrypted snapshots.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Snapshot restorations are restricted to the region in which the snapshots are created.", "IsAnswer": false }],
            "Explanation": "Snapshots shared with other users are usable in full by the recipient, including but limited to the ability to base modified volumes and snapshots.",
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-modifying-snapshot- permissions.html"
        } ,
        {
            "Id": 140,
            "Name": "You need to deploy a new application version to production. Because the deployment is high-risk, you need to roll the new version out to users over a number of hours, to make sure everything is working correctly. You need to be able to control the proportion of users seeing the new version of the application down to the percentage point. You use ELB and EC2 with Auto Scaling Groups and custom AMIs with your code pre-installed assigned to Launch Configurations. There are no database-level changes during your deployment. You have been told you cannot spend too much money, so you must not increase the number of EC2 instances much at all during the deployment, but you also need to be able to switch back to the original version of code quickly if something goes wrong. What is the best way to meet these requirements?",
            "Tag": "cd,pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a second ELB, Auto Scaling Launch Configuration, and Auto Scaling Group using the Launch Configuration. Create AMIs with all code pre-installed. Assign the new AMI to the second Auto Scaling Launch Configuration. Use Route53 Weighted Round Robin Records to adjust the proportion of traffic hitting the two ELBs.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use the Blue-Green deployment method to enable the fastest possible rollback if needed. Create a full second stack of instances and cut the DNS over to the new stack of instances, and change the DNS back if a rollback is needed.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create AMIs with all code pre-installed. Assign the new AMI to the Auto Scaling Launch Configuration, to replace the old one. Gradually terminate instances running the old code (launched with the old Launch Configuration) and allow the new AMIs to boot to adjust the traffic balance to the new code. On rollback, reverse the process by doing the same thing, but changing the AMI on the Launch Config back to the original code.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Migrate to use AWS Elastic Beanstalk. Use the established and well-tested Rolling Deployment setting AWS provides on the new Application Environment, publishing a zip bundle of the new code and adjusting the wait period to spread the deployment over time. Re-deploy the old code bundle to rollback if needed.", "IsAnswer": false }],
            "Explanation": "Only Weighted Round Robin DNS Records and reverse proxies allow such fine-grained tuning of traffic splits. The Blue-Green option does not meet the requirement that we mitigate costs and keep overall EC2 fleet size consistent, so we must select the 2 ELB and ASG option with WRR DNS tuning. This method is called A/B deployment and/or Canary deployment.",
            "Ref": "https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf"
        } ,
        {
            "Id": 14,
            "Name": "Which best describes 'CloudTrail' ?", 
            "Tag":"mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "An interface between CloudWatch Logs and CloudWatch Log Filters", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A service that logs all AWS API calls in your account", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "A service that records all CloudWatch Alarms to CloudWatch Logs", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "An interface between CloudWatch and CloudWatch Logs", "IsAnswer": false }],
            "Explanation":"AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you.",
            "Ref":"https://aws.amazon.com/cloudtrail/"
        } ,
        {
            "Id": 15,
            "Name": "Which of the following is the main purpose of CloudTrail?", 
            "Tag":"mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "To track resource changes", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "To enable security analysis", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "To provide compliance auditing", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the other options", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the other options", "IsAnswer": true }]
        } ,
        {
            "Id": 16,
            "Name": "What are CloudWatch Log Filters?", 
            "Tag":"mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Filters you can apply to CloudWatch Log Alarms so they don't notify you after hours", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A service that converts CloudWatch metrics into log files for processing", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "The terms and patterns to look for in log data as it is sent to CloudWatch Logs", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the other options", "IsAnswer": false }],
            "Explanation":"Metric filters define the terms and patterns to look for in log data as it is sent to CloudWatch Logs."
        } ,
        {
            "Id": 17,
            "Name": "What is a CloudWatch Custom Metric?", 
            "Tag":"mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "An existing metric you can modify to suit your needs", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "A metric that you can publish to CloudWatch containing whatever data you require", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "A real-time stream of system metrics", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "All of the other options", "IsAnswer": false }],
            "Explanation":"You can publish your own metrics to CloudWatch using CloudWatch Custom Metrics.",
            "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html"
        }  ,
        {
            "Id": 26,
            "Name": "Which of the following are the three Amazon Kinesis services?", 
            "Tag":"ha, elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Kinesis Streams, Kinesis Analytics and Kinesis Firehose", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Kinesis Waterfalls, Kinesis Logs and Kinesis Firehose", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Kinesis Waterfalls, Kinesis Logs and Kinesis Fireman", "IsAnswer": false},
                { "Id": 1058, "QuestionId": 1010, "Name": "Kinesis Streams, Kinesis Analytics and Kinesis Fireman", "IsAnswer": false }],
            "Explanation":"Kinesis contains 3 separate services, Kinesis Streams, Kinesis Analytics and Kinesis Firehose.",
            "Ref":"https://aws.amazon.com/kinesis/"
        }  
    ]
}