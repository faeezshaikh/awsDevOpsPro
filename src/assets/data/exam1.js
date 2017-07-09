{
    "quiz": {
        "name": "Exam 1",
        "logo" : "assets/img/EC2.png",
        "time":"120 minutes"
    },
    "questions": [
     {
        "Id": 1,
        "Name": "Due to compliance regulations, management has asked you to provide a system that allows for cost-effective long-term storage of your application logs and provides a way for support staff to view the logs more quickly. Currently your log system archives logs automatically to Amazon S3 every hour, and support staff must wait for these logs to appear in Amazon S3, because they do not currently have access to the systems to view live logs. What method should you use to become compliant while also providing a faster way for support staff to have access to logs?", 
        "Tag":"MM&L",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier, and add a new policy to push all log entries to Amazon SQS for ingestion by the support team.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier, and use or write a service to also stream your application logs to CloudWatch Logs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Update Amazon Glacier lifecycle policies to pull new logs from Amazon S3, and in the Amazon EC2 console, enable the CloudWatch Logs Agent on all of your application servers.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier. Enable Amazon S3 partial uploads on your Amazon S3 bucket, and trigger an Amazon SNS notification when a partial upload occurs.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Use or write a service to stream your application logs to CloudWatch Logs. Use an Amazon Elastic Map Reduce cluster to live stream your logs from CloudWatch Logs for ingestion by the support team, and create a Hadoop job to push the logs to S3 in five-minute chunks.", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""
    } 
    ,
       {
        "Id": 2,
        "Name": "You want to securely distribute credentials for your Amazon RDS instance to your fleet of web server instances. The credentials are stored in a file that is controlled by a configuration management system. How do you securely deploy the credentials in an automated manner across the fleet of web server instances, which can number in the hundreds, while retaining the ability to roll back if needed?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Store your credential files in an Amazon S3 bucket. Use Amazon S3 server-side encryption on the credential files. Have a scheduled job that pulls down the credential files into the instances every 10 minutes.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Store the credential files in your version-controlled repository with the rest of your code. Have a post-commit action in version control that kicks off a job in your continuous integration system which securely copies the new credential files to all web server instances.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Insert credential files into user data and use an instance lifecycle policy to periodically refresh the file from the user data.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Keep credential files as a binary blob in an Amazon RDS MySQL DB instance, and have a script on each Amazon EC2 instance that pulls the files down from the RDS instance.", "IsAnswer": true},
            { "Id": 1059, "QuestionId": 1010, "Name": "Store the credential files in your version-controlled repository with the rest of your code. Use a parallel file copy program to send the credential files from your local machine to the Amazon EC2 instances.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 3,
        "Name": "You are using a configuration management system to manage your Amazon EC2 instances. On your Amazon EC2 Instances, you want to store credentials for connecting to an Amazon RDS DB instance. How should you securely store these credentials?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Give the Amazon EC2 instances an IAM role that allows read access to a private Amazon S3 bucket. Store a file with database credentials in the Amazon S3 bucket. Have your configuration management system pull the file from the bucket when it is needed.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Launch an Amazon EC2 instance and use the configuration management system to bootstrap the instance with the Amazon RDS DB credentials. Create an AMI from this instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Store the Amazon RDS DB credentials in Amazon EC2 user data. Import the credentials into the Instance on boot.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Assign an IAM role to your Amazon RDS instance, and use this IAM role to access the Amazon RDS DB from your Amazon EC2 instances.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Store your credentials in your version control system, in plaintext. Check out a copy of your credentials from the version control system on boot. Use Amazon EBS encryption on the volume storing the Amazon RDS DB credentials.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 4,
        "Name": "Your company has developed a web application and is hosting it in an Amazon S3 bucket configured for static website hosting. The application is using the AWS SDK for JavaScript in the browser to access data stored in an Amazon DynamoDB table. How can you ensure that API keys for access to your data in DynamoDB are kept secure?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon S3 role in IAM with access to the specific DynamoDB tables, and assign it to the bucket hosting your website.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure S3 bucket tags with your AWS access keys for your bucket hosing your website so that the application can query them for access.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure a web identity federation role within IAM to enable access to the correct DynamoDB resources and retrieve temporary credentials.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Store AWS keys in global variables within your application and configure the application to use these credentials when making requests.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 5,
        "Name": "You need to implement A/B deployments for several multi-tier web applications. Each of them has Its Individual infrastructure: Amazon Elastic Compute Cloud (EC2) front-end servers, Amazon ElastiCache clusters, Amazon Simple Queue Service (SQS) queues, and Amazon Relational Database (RDS) Instances. Which combination of services would give you the ability to control traffic between different deployed versions of your application? (Choose one.)", 
        "Tag":"cd",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create one AWS Elastic Beanstalk application and all AWS resources (using configuration files inside the application source bundle) for each web application. New versions would be deployed a-eating Elastic Beanstalk environments and using the Swap URLs feature.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS CloudFormation templates, create one Elastic Beanstalk application and all AWS resources (in the same template) for each web application. New versions would be deployed using AWS CloudFormation templates to create new Elastic Beanstalk environments, and traffic would be balanced between them using weighted Round Robin (WRR) records in Amazon Route53.", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Using AWS CloudFormation templates, create one Elastic Beanstalk application and all AWS resources (in the same template) for each web application. New versions would be deployed updating a parameter on the CloudFormation template and passing it to the cfn-hup helper daemon, and traffic would be balanced between them using Weighted Round Robin (WRR) records in Amazon Route 53.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create one Elastic Beanstalk application and all AWS resources (using configuration files inside the application source bundle) for each web application. New versions would be deployed updating the Elastic Beanstalk application version for the current Elastic Beanstalk environment.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 6,
        "Name": "You work for an insurance company and are responsible for the day-to-day operations of your company's online quote system used to provide insurance quotes to members of the public. Your company wants to use the application logs generated by the system to better understand customer behavior. Industry, regulations also require that you retain all application logs for the system indefinitely in order to investigate fraudulent claims in the future. You have been tasked with designing a log management system with the following requirements: 1) All log entries must be retained by the system, even during unplanned instance failure. 2) The customer insight team requires immediate access to the logs from the past seven days. 3) The fraud investigation team requires access to all historic logs, but will wait up to 24 hours before these logs are available. How would you meet these requirements in a cost-effective manner? Choose 3 answers.", 
        "Tag":"MM&L",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure your application to write logs to the instance's ephemeral disk, because this storage is free and has good write performance. Create a script that moves the logs from the instance to Amazon S3 once an hour.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Write a script that is configured to be executed when the instance is stopped or terminated and that will upload any remaining logs on the instance to Amazon S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an Amazon S3 lifecycle configuration to move log files from Amazon S3 to Amazon Glacier after seven days.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure your application to write logs to the instance's default Amazon EBS boot volume, because this storage already exists. Create a script that moves the logs from the instance to Amazon 53 once an hour.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Configure your application to write logs to a separate Amazon EBS volume with the 'delete on termination' field set to false. Create a script that moves the logs from the instance to Amazon S3 once an hour.", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Create a housekeeping script that runs on a T2 micro instance managed by an Auto Scaling group for high availability. The script uses the AWS API to identify any unattached Amazon EBS volumes containing log files. Your housekeeping script will mount the Amazon EBS volume, upload all logs to Amazon S3, and then delete the volume.", "IsAnswer": true}],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 7,
        "Name": "You have an application running on Amazon EC2 in an Auto Scaling group. Instances are being bootstrapped dynamically, and the bootstrapping takes over 15 minutes to complete. You find that instances are reported by Auto Scaling as being In Service before bootstrapping has completed. You are receiving application alarms related to new instances before they have completed bootstrapping, which is causing confusion. You find the cause: your application monitoring tool is polling the Auto Scaling Service API for instances that are In Service, and creating alarms for new previously unknown instances. Which of the following will ensure that new instances are not added to your application monitoring tool before bootstrapping is completed?", 
        "Tag":"MM&L, cd, HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an Auto Scaling group lifecycle hook to hold the instance in a pending: wait state until your bootstrapping is complete. Once bootstrapping is complete, notify Auto Scaling to complete the lifecycle hook and move the instance into a pending: complete state.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the default Amazon CloudWatch application metrics to monitor your application's health. Configure an Amazon SNS topic to send these CloudWatch alarms to the correct recipients.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Tag all instances on launch to identify that they are in a pending state. Change your application monitoring tool to look for this tag before adding new instances, and the use the Amazon API to set the instance state to 'pending' until bootstrapping is complete.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Increase the desired number of instances in your Auto Scaling group configuration to reduce the time it takes to bootstrap future instances.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 8,
        "Name": "You have been given a business requirement to retain log files for your application for 10 years. You need to regularly retrieve the most recent logs for troubleshooting. Your logging system must be cost-effective, given the large volume of logs. What technique should you use to meet these requirements?", 
        "Tag":"MM&L",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Store your log in Amazon CloudWatch Logs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Store your logs in Amazon Glacier.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Store your logs in Amazon S3, and use lifecycle policies to archive to Amazon Glacier.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Store your logs in HDFS on an Amazon EMR cluster.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Store your logs on Amazon EBS, and use Amazon EBS snapshots to archive them.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 9,
        "Name": "You work for a startup that has developed a new photo-sharing application for mobile devices. Over recent months your application has increased in popularity; this has resulted in a decrease in the performance of the application clue to the increased load. Your application has a two-tier architecture that is composed of an Auto Scaling PHP application tier and a MySQL RDS instance initially deployed with AWS CloudFormation. Your Auto Scaling group has a min value of 4 and a max value of 8. The desired capacity is now at 8 because of the high CPU utilization of the instances. After some analysis, you are confident that the performance issues stem from a constraint in CPU capacity, although memory utilization remains low. You therefore decide to move from the general-purpose M3 instances to the compute-optimized C3 instances. How would you deploy this change while minimizing any interruption to your end users?", 
        "Tag":"HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Sign into the AWS Management Console, copy the old launch configuration, and create a new launch configuration that specifies the C3 instances. Update the Auto Scaling group with the new launch configuration. Auto Scaling will then update the instance type of all running instances.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Sign into the AWS Management Console, and update the existing launch configuration with the new C3 instance type. Add an UpdatePolicy attribute to your Auto Scaling group that specifies AutoScalingRollingUpdate.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Update the launch configuration specified in the AWS CloudFormation template with the new C3 instance type. Run a stack update with the new template. Auto Scaling will then update the instances with the new instance type.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Update the launch configuration specified in the AWS CloudFormation template with the new C3 instance type. Also add an UpdatePolicy attribute to your Auto Scaling group that specifies AutoScalingRollingUpdate. Run a stack update with the new template.", "IsAnswer": true}],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 10,
        "Name": "You've been tasked with implementing an automated data backup solution for your application servers that run on Amazon EC2 with Amazon EBS volumes. You want to use a distributed data store for your backups to avoid single points of failure and to increase the durability of the data. Daily backups should be retained for 30 days so that you can restore data within an hour. How can you implement this through a script that a scheduling daemon runs daily on the application servers?", 
        "Tag":"HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date time group, and copy backup data to a second Amazon EBS volume. Use the ec2-describe-volumes API to enumerate existing backup volumes. Call the ec2-delete-volume API to prune backup volumes that are tagged with a date-tine group older than 30 days.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Write the script to call the Amazon Glacier upload archive API, and tag the backup archive with the current date-time group. Use the list vaults API to enumerate existing backup archives Call the delete vault API to prune backup archives that are tagged with a date-time group older than 30 days.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-snapshot API, and tag the Amazon EBS snapshot with the current date-time group. Use the ec2-describe-snapshot API to enumerate existing Amazon EBS snapshots. Call the ec2-delete-snapShot API to prune Amazon EBS snapshots that are tagged with a date- time group older than 30 days.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date-time group, and use the ec2-copy-snapshot API to back up data to the new Amazon EBS volume. Use the ec2- describe-snapshot API to enumerate existing backup volumes. Call the ec2-delete-snaphot API to prune backup Amazon EBS volumes that are tagged with a date-time group older than 30 days.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 11,
        "Name": "Your application uses CloudFormation to orchestrate your application's resources. During your testing phase before the application went live, your Amazon RDS instance type was changed and caused the instance to be re-created, resulting In the loss of test data. How should you prevent this from occurring in the future?", 
        "Tag":"CD",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Within the AWS CloudFormation parameter with which users can select the Amazon RDS instance type, set AllowedValues to only contain the current instance type.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use an AWS CloudFormation stack policy to deny updates to the instance. Only allow UpdateStack permission to IAM principals that are denied SetStackPolicy.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "In the AWS CloudFormation template, set the AWS::RDS::DBInstance's DBlnstanceClass property to be read-only.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Subscribe to the AWS CloudFormation notification 'BeforeResourceUpdate' and call CancelStackUpdate if the resource identified is the Amazon RDS instance.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "In the AWS CloudFormation template, set the DeletionPolicy of the AWS::RDS::DBInstance's DeletionPolicy property to 'Retain'", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 12,
        "Name": "Your company develops a variety of web applications using many platforms and programming languages with different application dependencies. Each application must be developed and deployed quickly and be highly available to satisfy your business requirements. Which of the following methods should you use to deploy these applications rapidly?", 
        "Tag":"HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Develop the applications in Docker containers, and then deploy them to Elastic Beanstalk environments with Auto Scaling and Elastic Load Balancing.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the AWS CloudFormation Docker import service to build and deploy the applications with high availability in multiple Availability Zones.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Develop each application's code in DynamoDB, and then use hooks to deploy it to Elastic Beanstalk environments with Auto Scaling and Elastic Load Balancing.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Store each application's code in a Git repository, develop custom package repository managers for each application's dependencies, and deploy to AWS OpsWorks in multiple Availability Zones.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 13,
        "Name": "You have a large number of web servers in an Auto Scaling group behind a load balancer. On an hourly basis, you want to filter and process the logs to collect data on unique visitors, and then put that data in a durable data store in order to run reports. Web servers in the Auto Scaling group are constantly launching and terminating based on your scaling policies, but you do not want to lose any of the log data from these servers during a stop/termination initiated by a user or by Auto Scaling. What two approaches will meet these requirements? Choose 2 answers", 
        "Tag":"MM&L, HA?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Install an Amazon Cloudwatch Logs Agent on every web server during the bootstrap process. Create a CloudWatch log group and define Metric Filters to create custom metrics that track unique visitors from the streaming web server logs. Create a scheduled task on an Amazon EC2 instance that runs every hour to generate a new report based on the Cloudwatch custom metrics.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "On the web servers, create a scheduled task that executes a script to rotate and transmit the logs to Amazon Glacier. Ensure that the operating system shutdown procedure triggers a logs transmission when the Amazon EC2 instance is stopped/terminated. Use Amazon Data Pipeline to process the data in Amazon Glacier and run reports every hour.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "On the web servers, create a scheduled task that executes a script to rotate and transmit the logs to an Amazon S3 bucket. Ensure that the operating system shutdown procedure triggers a logs transmission when the Amazon EC2 instance is stopped/terminated. Use AWS Data Pipeline to move log data from the Amazon S3 bucket to Amazon Redshift In order to process and run reports every hour.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Install an AWS Data Pipeline Logs Agent on every web server during the bootstrap process. Create a log group object in AWS Data Pipeline, and define Metric Filters to move processed log data directly from the web servers to Amazon Redshift and run reports every hour.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 14,
        "Name": "You have been tasked with deploying a scalable distributed system using AWS OpsWorks. Your distributed system is required to scale on demand. As it is distributed, each node must hold a configuration file that includes the hostnames of the other instances within the layer. How should you configure AWS OpsWorks to manage scaling this application dynamically?", 
        "Tag":"CD",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create a Chef Recipe to update this configuration file, configure your AWS OpsWorks stack to use custom cookbooks, and assign this recipe to the Configure LifeCycle Event of the specific layer.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Update this configuration file by writing a script to poll the AWS OpsWorks service API for new instances. Configure your base AMI to execute this script on Operating System startup.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a Chef Recipe to update this configuration file, configure your AWS OpsWorks stack to use custom cookbooks, and assign this recipe to execute when instances are launched.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure your AWS OpsWorks layer to use the AWS-provided recipe for distributed host configuration, and configure the instance hostname and file path parameters in your recipes settings.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 15,
        "Name": "You have an application running on an Amazon EC2 instance and you are using IAM roles to securely access AWS Service APIs. How can you configure your application running on that instance to retrieve the API keys for use with the AWS SDKs?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "When assigning an EC2 IAM role to your instance in the console, in the 'Chosen SDK' drop- down list, select the SDK that you are using, and the instance will configure the correct SDK on launch with the API keys.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Within your application code, make a GET request to the IAM Service API to retrieve credentials for your user.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "When using AWS SDKs and Amazon EC2 roles, you do not have to explicitly retrieve API keys, because the SDK handles retrieving them from the Amazon EC2 MetaData service.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Within your application code, configure the AWS SDK to get the API keys from environment variables, because assigning an Amazon EC2 role stores keys in environment variables on launch.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 16,
        "Name": "When an Auto Scaling group is running in Amazon Elastic Compute Cloud (EC2), your application rapidly scales up and down in response to load within a 10-minute window; however, after the load peaks, you begin to see problems in your configuration management system where previously terminated Amazon EC2 resources are still showing as active. What would be a reliable and efficient way to handle the cleanup of Amazon EC2 resources within your configuration management system? Choose 2 answers", 
        "Tag":"cd",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Write a script that is run by a daily cron job on an Amazon EC2 instance and that executes API Describe calls of the EC2 Auto Scaling group and removes terminated instances from the configuration management system.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure an Amazon Simple Queue Service (SQS) queue for Auto Scaling actions that has a script that listens for new messages and removes terminated instances from the configuration management system.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use your existing configuration management system to control the launching and bootstrapping of instances to reduce the number of moving parts in the automation.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Write a small script that is run during Amazon EC2 instance shutdown to de-register the resource from the configuration management system.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow Service (SWF) to maintain an Amazon DynamoDB database that contains a whitelist of instances that have been previously launched, and allow the Amazon SWF worker to remove information from the configuration management system.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 17,
        "Name": "You have enabled Elastic Load Balancing HTTP health checking. After looking at the AWS Management Console, you see that all instances are passing health checks, but your customers are reporting that your site is not responding. What is the cause?", 
        "Tag":"cd",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The HTTP health checking system is misreporting due to latency in inter-instance metadata synchronization.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The health check in place is not sufficiently evaluating the application function.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "The application is returning a positive health check too quickly for the AWS Management Console to respond.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Latency in DNS resolution is interfering with Amazon EC2 metadata retrieval.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 18,
        "Name": "You use Amazon CloudWatch as your primary monitoring system for your web application. After a recent software deployment, your users are getting Intermittent 500 Internal Server Errors when using the web application. You want to create a CloudWatch alarm, and notify an on-call engineer when these occur. How can you accomplish this using AWS services? Choose 3 answers", 
        "Tag":"MM&L",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Deploy your web application as an AWS Elastic Beanstalk application. Use the default Elastic Beanstalk Cloudwatch metrics to capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Install a CloudWatch Logs Agent on your servers to stream web application logs to CloudWatch.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use Amazon Simple Email Service to notify an on-call engineer when a CloudWatch alarm is triggered.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create a CloudWatch Logs group and define metric filters that capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon Simple Notification Service to notify an on-call engineer when a CloudWatch alarm is triggered.", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to stream web application logs from your servers to CloudWatch.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 19,
        "Name": "After a daily scrum with your development teams, you've agreed that using Blue/Green style deployments would benefit the team. Which technique should you use to deliver this new requirement?", 
        "Tag":"CD",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Re-deploy your application on AWS Elastic Beanstalk, and take advantage of Elastic Beanstalk deployment types.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using an AWS CloudFormation template, re-deploy your application behind a load balancer, launch a new AWS CloudFormation stack during each deployment, update your load balancer to send half your traffic to the new stack while you test, after verification update the load balancer to send 100% of traffic to the new stack, and then terminate the old stack.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer that uses Auto Scaling groups, create a new identical Auto Scaling group, and associate it to the load balancer. During deployment, set the desired number of instances on the old Auto Scaling group to zero, and when all instances have terminated, delete the old Auto Scaling group.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using an AWS OpsWorks stack, re-deploy your application behind an Elastic Load Balancing load balancer and take advantage of OpsWorks stack versioning, during deployment create a new version of your application, tell OpsWorks to launch the new version behind your load balancer, and when the new version is launched, terminate the old OpsWorks stack.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 20,
        "Name": "You have a complex system that involves networking, IAM policies, and multiple, three-tier applications. You are still receiving requirements for the new system, so you don't yet know how many AWS components will be present in the final design. You want to start using AWS CloudFormation to define these AWS resources so that you can automate and version-control your infrastructure. How would you use AWS CloudFormation to provide agile new environments for your customers in a cost-effective, reliable manner?", 
        "Tag":"CD, HA",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Manually create one template to encompass all the resources that you need for the system, so you only have a single template to version-control.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create multiple separate templates for each logical part of the system, create nested stacks in AWS CloudFormation, and maintain several templates in version-control.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create multiple separate templates for each logical part of the system, and provide the outputs from one to the next using an Amazon Elastic Compute Cloud (EC2) instance running the SDK for finer granularity of control.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Manually construct the networking layer using Amazon Virtual Private Cloud (VPC) because this does not change often, and then use AWS CloudFormation to define all other ephemeral resources.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 21,
        "Name": "Your development team wants account-level access to production instances in order to do live debugging of a highly secure environment. Which of the following should you do?", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Place the credentials provided by Amazon Elastic Compute Cloud (EC2) into a secure Amazon Sample Storage Service (S3) bucket with encryption enabled. Assign AWS Identity and Access Management (IAM) users to each developer so they can download the credentials file.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Place an internally created private key into a secure S3 bucket with server-side encryption using customer keys and configuration management, create a service account on all the instances using this private key, and assign IAM users to each developer so they can download the file.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Place each developer's own public key into a private S3 bucket, use instance profiles and configuration management to create a user account for each developer on all instances, and place the user's public keys into the appropriate account.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Place the credentials provided by Amazon EC2 onto an MFA encrypted USB drive, and physically share it with each developer so that the private key never leaves the office.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
    
     ,
       {
        "Id": 22,
        "Name": "As part of your continuous deployment process, your application undergoes an I/O load performance test before it is deployed to production using new AMIs. The application uses one Amazon Elastic Block Store (EBS) PIOPS volume per instance and requires consistent I/O performance. Which of the following must be carried out to ensure that I/O load performance tests yield the correct results in a repeatable manner?", 
        "Tag":"MM&L, CD",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Ensure that the I/O block sizes for the test are randomly selected.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Ensure that the Amazon EBS volumes have been pre-warmed by reading all the blocks before the test.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ensure that snapshots of the Amazon EBS volumes are created as a backup.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Ensure that the Amazon EBS volume is encrypted.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Ensure that the Amazon EBS volume has been pre-warmed by creating a snapshot of the volume before the test.", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 23,
        "Name": "After reviewing the last quarter's monthly bills, management has noticed an increase in the overall bill from Amazon. After researching this increase in cost, you discovered that one of your new services is doing a lot of GET Bucket API calls to Amazon S3 to build a metadata cache of all objects in the applications bucket. Your boss has asked you to come up with a new cost-effective way to help reduce the amount of these new GET Bucket API calls. What process should you use to help mitigate the cost?", 
        "Tag":"governance",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Update your Amazon S3 buckets' lifecycle policies to automatically push a list of objects to a new bucket, and use this list to view objects associated with the application's bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a new DynamoDB table. Use the new DynamoDB table to store all metadata about all objects uploaded to Amazon S3. Any time a new object is uploaded, update the application's internal Amazon S3 object metadata cache from DynamoDB.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using Amazon SNS, create a notification on any new Amazon S3 objects that automatically updates a new DynamoDB table to store all metadata about the new object. Subscribe the application to the Amazon SNS topic to update its internal Amazon S3 object metadata cache from the DynamoDB table.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Upload all images to Amazon SQS, set up SQS lifecycles to move all images to Amazon S3, and initiate an Amazon SNS notification to your application to update the application's Internal Amazon S3 object metadata cache.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Upload all images to an ElastiCache filecache server. Update your application to now read all file metadata from the ElastiCache filecache server, and configure the ElastiCache policies to push all files to Amazon S3 for long-term storage.", "IsAnswer": false }],
            "Explanation":"Creating Lifecycle policies doesn't make sense here. Using ElastiCache to store metadata is not a good practice. SQS Lifecycles does not exist. Subsribing to SNS to update internal cache is the best option in this scenario."
    } 
     ,
       {
        "Id": 24,
        "Name": "Your current log analysis application takes more than four hours to generate a report of the top 10 users of your web application. You have been asked to implement a system that can report this information in real time, ensure that the report is always up to date, and handle increases in the number of requests to your web application. Choose the option that is cost-effective and can fulfill the requirements.", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Publish your data to CloudWatch Logs, and configure your application to autoscale to handle the load on demand.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Publish your log data to an Amazon S3 bucket. Use AWS CloudFormation to create an Auto Scaling group to scale your post-processing application which is configured to pull down your log files stored an Amazon S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Post your log data to an Amazon Kinesis data stream, and subscribe your log-processing application so that is configured to process your logging data.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure an Auto Scaling group to increase the size of your Amazon EMR duster.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Create a multi-AZ Amazon RDS MySQL cluster, post the logging data to MySQL, and run a map reduce job to retrieve the required information on user counts.", "IsAnswer": false }],
            "Explanation":"Only Kinesis can satisfy the 'real-time' processing requirement in this case"
    } 
     ,
       {
        "Id": 25,
        "Name": "You are using Elastic Beanstalk to manage your e-commerce store. The store is based on an open source e- commerce platform and is deployed across multiple instances in an Auto Scaling group. Your development team often creates new 'extensions' for the e-commerce store. These extensions include PHP source code as well as an SQL upgrade script used to make any necessary updates to the database schema. You have noticed that some extension deployments fail due to an error when running the SQL upgrade script. After further investigation, you realize that this is because the SQL script is being executed on all of your Amazon EC2 instances. How would you ensure that the SQL script is only executed once per deployment regardless of how many Amazon EC2 instances are running at the time?", 
        "Tag":"cd",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use a 'Container command' within an Elastic Beanstalk configuration file to execute the script, ensuring that the 'leader only' flag is set to true.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Make use of the Amazon EC2 metadata service to query whether the instance is marked as the leader in the Auto Scaling group. Only execute the script if 'true' is returned.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use a 'Solo Command' within an Elastic Beanstalk configuration file to execute the script. The Elastic Beanstalk service will ensure that the command is only executed once.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Update the Amazon RDS security group to only allow write access from a single instance in the Auto Scaling group; that way, only one instance will successfully execute the script on the database.", "IsAnswer": false }]
    } 
     ,
       {
        "Id": 26,
        "Name": "You are administering a continuous integration application that polls version control for changes and then launches new Amazon EC2 instances for a full suite of build tests. What should you do to ensure the lowest overall cost while being able to run as many tests in parallel as possible?", 
        "Tag":"cd",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new Amazon EC2 instance for build test, unit and integration tests.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Perform syntax and build tests on the continuous integration system before launching the new Amazon EC2 instance unit and integration tests.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Perform all tests on the continuous integration system, using AWS OpsWorks for unit, integration, and build tests.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new AWS Data Pipeline for coordinating the output of unit, integration, and build tests.", "IsAnswer": false }],
            "Explanation":"Use a CI server like Jenkins to build and test code before spinning new EC2 instances."
    } 
     ,
       {
        "Id": 21,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 21,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 21,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 21,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
    
   
     ]
}