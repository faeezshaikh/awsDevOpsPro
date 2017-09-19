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
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier, and add a new policy to push all log entries to Amazon SQS for ingestion by the support team.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier, and use or write a service to also stream your application logs to CloudWatch Logs.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Update Amazon Glacier lifecycle policies to pull new logs from Amazon S3, and in the Amazon EC2 console, enable the CloudWatch Logs Agent on all of your application servers.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Update Amazon S3 lifecycle policies to archive old logs to Amazon Glacier. Enable Amazon S3 partial uploads on your Amazon S3 bucket, and trigger an Amazon SNS notification when a partial upload occurs.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use or write a service to stream your application logs to CloudWatch Logs. Use an Amazon Elastic Map Reduce cluster to live stream your logs from CloudWatch Logs for ingestion by the support team, and create a Hadoop job to push the logs to S3 in five-minute chunks.", "IsAnswer": true }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 2,
            "Name": "You want to securely distribute credentials for your Amazon RDS instance to your fleet of web server instances. The credentials are stored in a file that is controlled by a configuration management system. How do you securely deploy the credentials in an automated manner across the fleet of web server instances, which can number in the hundreds, while retaining the ability to roll back if needed?",
            "Tag": "Security",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Store your credential files in an Amazon S3 bucket. Use Amazon S3 server-side encryption on the credential files. Have a scheduled job that pulls down the credential files into the instances every 10 minutes.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Store the credential files in your version-controlled repository with the rest of your code. Have a post-commit action in version control that kicks off a job in your continuous integration system which securely copies the new credential files to all web server instances.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Insert credential files into user data and use an instance lifecycle policy to periodically refresh the file from the user data.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Keep credential files as a binary blob in an Amazon RDS MySQL DB instance, and have a script on each Amazon EC2 instance that pulls the files down from the RDS instance.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Store the credential files in your version-controlled repository with the rest of your code. Use a parallel file copy program to send the credential files from your local machine to the Amazon EC2 instances.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 3,
            "Name": "You are using a configuration management system to manage your Amazon EC2 instances. On your Amazon EC2 Instances, you want to store credentials for connecting to an Amazon RDS DB instance. How should you securely store these credentials?",
            "Tag": "Security",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Give the Amazon EC2 instances an IAM role that allows read access to a private Amazon S3 bucket. Store a file with database credentials in the Amazon S3 bucket. Have your configuration management system pull the file from the bucket when it is needed.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Launch an Amazon EC2 instance and use the configuration management system to bootstrap the instance with the Amazon RDS DB credentials. Create an AMI from this instance.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Store the Amazon RDS DB credentials in Amazon EC2 user data. Import the credentials into the Instance on boot.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Assign an IAM role to your Amazon RDS instance, and use this IAM role to access the Amazon RDS DB from your Amazon EC2 instances.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Store your credentials in your version control system, in plaintext. Check out a copy of your credentials from the version control system on boot. Use Amazon EBS encryption on the volume storing the Amazon RDS DB credentials.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 4,
            "Name": "Your company has developed a web application and is hosting it in an Amazon S3 bucket configured for static website hosting. The application is using the AWS SDK for JavaScript in the browser to access data stored in an Amazon DynamoDB table. How can you ensure that API keys for access to your data in DynamoDB are kept secure?",
            "Tag": "Security",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon S3 role in IAM with access to the specific DynamoDB tables, and assign it to the bucket hosting your website.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure S3 bucket tags with your AWS access keys for your bucket hosing your website so that the application can query them for access.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Configure a web identity federation role within IAM to enable access to the correct DynamoDB resources and retrieve temporary credentials.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Store AWS keys in global variables within your application and configure the application to use these credentials when making requests.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 5,
            "Name": "You need to implement A/B deployments for several multi-tier web applications. Each of them has Its Individual infrastructure: Amazon Elastic Compute Cloud (EC2) front-end servers, Amazon ElastiCache clusters, Amazon Simple Queue Service (SQS) queues, and Amazon Relational Database (RDS) Instances. Which combination of services would give you the ability to control traffic between different deployed versions of your application? (Choose one.)",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create one AWS Elastic Beanstalk application and all AWS resources (using configuration files inside the application source bundle) for each web application. New versions would be deployed a-eating Elastic Beanstalk environments and using the Swap URLs feature.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS CloudFormation templates, create one Elastic Beanstalk application and all AWS resources (in the same template) for each web application. New versions would be deployed using AWS CloudFormation templates to create new Elastic Beanstalk environments, and traffic would be balanced between them using weighted Round Robin (WRR) records in Amazon Route53.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Using AWS CloudFormation templates, create one Elastic Beanstalk application and all AWS resources (in the same template) for each web application. New versions would be deployed updating a parameter on the CloudFormation template and passing it to the cfn-hup helper daemon, and traffic would be balanced between them using Weighted Round Robin (WRR) records in Amazon Route 53.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create one Elastic Beanstalk application and all AWS resources (using configuration files inside the application source bundle) for each web application. New versions would be deployed updating the Elastic Beanstalk application version for the current Elastic Beanstalk environment.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 6,
            "Name": "You work for an insurance company and are responsible for the day-to-day operations of your company's online quote system used to provide insurance quotes to members of the public. Your company wants to use the application logs generated by the system to better understand customer behavior. Industry, regulations also require that you retain all application logs for the system indefinitely in order to investigate fraudulent claims in the future. You have been tasked with designing a log management system with the following requirements: 1) All log entries must be retained by the system, even during unplanned instance failure. 2) The customer insight team requires immediate access to the logs from the past seven days. 3) The fraud investigation team requires access to all historic logs, but will wait up to 24 hours before these logs are available. How would you meet these requirements in a cost-effective manner? Choose 3 answers.",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure your application to write logs to the instance's ephemeral disk, because this storage is free and has good write performance. Create a script that moves the logs from the instance to Amazon S3 once an hour.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Write a script that is configured to be executed when the instance is stopped or terminated and that will upload any remaining logs on the instance to Amazon S3.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create an Amazon S3 lifecycle configuration to move log files from Amazon S3 to Amazon Glacier after seven days.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure your application to write logs to the instance's default Amazon EBS boot volume, because this storage already exists. Create a script that moves the logs from the instance to Amazon 53 once an hour.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Configure your application to write logs to a separate Amazon EBS volume with the 'delete on termination' field set to false. Create a script that moves the logs from the instance to Amazon S3 once an hour.", "IsAnswer": true },
                { "Id": 1060, "QuestionId": 1010, "Name": "Create a housekeeping script that runs on a T2 micro instance managed by an Auto Scaling group for high availability. The script uses the AWS API to identify any unattached Amazon EBS volumes containing log files. Your housekeeping script will mount the Amazon EBS volume, upload all logs to Amazon S3, and then delete the volume.", "IsAnswer": true }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 7,
            "Name": "You have an application running on Amazon EC2 in an Auto Scaling group. Instances are being bootstrapped dynamically, and the bootstrapping takes over 15 minutes to complete. You find that instances are reported by Auto Scaling as being In Service before bootstrapping has completed. You are receiving application alarms related to new instances before they have completed bootstrapping, which is causing confusion. You find the cause: your application monitoring tool is polling the Auto Scaling Service API for instances that are In Service, and creating alarms for new previously unknown instances. Which of the following will ensure that new instances are not added to your application monitoring tool before bootstrapping is completed?",
            "Tag": "MM&L, cd, HA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Auto Scaling group lifecycle hook to hold the instance in a pending: wait state until your bootstrapping is complete. Once bootstrapping is complete, notify Auto Scaling to complete the lifecycle hook and move the instance into a pending: complete state.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use the default Amazon CloudWatch application metrics to monitor your application's health. Configure an Amazon SNS topic to send these CloudWatch alarms to the correct recipients.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Tag all instances on launch to identify that they are in a pending state. Change your application monitoring tool to look for this tag before adding new instances, and the use the Amazon API to set the instance state to 'pending' until bootstrapping is complete.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Increase the desired number of instances in your Auto Scaling group configuration to reduce the time it takes to bootstrap future instances.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 8,
            "Name": "You have been given a business requirement to retain log files for your application for 10 years. You need to regularly retrieve the most recent logs for troubleshooting. Your logging system must be cost-effective, given the large volume of logs. What technique should you use to meet these requirements?",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Store your log in Amazon CloudWatch Logs.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Store your logs in Amazon Glacier.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Store your logs in Amazon S3, and use lifecycle policies to archive to Amazon Glacier.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Store your logs in HDFS on an Amazon EMR cluster.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Store your logs on Amazon EBS, and use Amazon EBS snapshots to archive them.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 9,
            "Name": "You work for a startup that has developed a new photo-sharing application for mobile devices. Over recent months your application has increased in popularity; this has resulted in a decrease in the performance of the application clue to the increased load. Your application has a two-tier architecture that is composed of an Auto Scaling PHP application tier and a MySQL RDS instance initially deployed with AWS CloudFormation. Your Auto Scaling group has a min value of 4 and a max value of 8. The desired capacity is now at 8 because of the high CPU utilization of the instances. After some analysis, you are confident that the performance issues stem from a constraint in CPU capacity, although memory utilization remains low. You therefore decide to move from the general-purpose M3 instances to the compute-optimized C3 instances. How would you deploy this change while minimizing any interruption to your end users?",
            "Tag": "HA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Sign into the AWS Management Console, copy the old launch configuration, and create a new launch configuration that specifies the C3 instances. Update the Auto Scaling group with the new launch configuration. Auto Scaling will then update the instance type of all running instances.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Sign into the AWS Management Console, and update the existing launch configuration with the new C3 instance type. Add an UpdatePolicy attribute to your Auto Scaling group that specifies AutoScalingRollingUpdate.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Update the launch configuration specified in the AWS CloudFormation template with the new C3 instance type. Run a stack update with the new template. Auto Scaling will then update the instances with the new instance type.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Update the launch configuration specified in the AWS CloudFormation template with the new C3 instance type. Also add an UpdatePolicy attribute to your Auto Scaling group that specifies AutoScalingRollingUpdate. Run a stack update with the new template.", "IsAnswer": true }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 10,
            "Name": "You've been tasked with implementing an automated data backup solution for your application servers that run on Amazon EC2 with Amazon EBS volumes. You want to use a distributed data store for your backups to avoid single points of failure and to increase the durability of the data. Daily backups should be retained for 30 days so that you can restore data within an hour. How can you implement this through a script that a scheduling daemon runs daily on the application servers?",
            "Tag": "HA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date time group, and copy backup data to a second Amazon EBS volume. Use the ec2-describe-volumes API to enumerate existing backup volumes. Call the ec2-delete-volume API to prune backup volumes that are tagged with a date-tine group older than 30 days.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Write the script to call the Amazon Glacier upload archive API, and tag the backup archive with the current date-time group. Use the list vaults API to enumerate existing backup archives Call the delete vault API to prune backup archives that are tagged with a date-time group older than 30 days.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-snapshot API, and tag the Amazon EBS snapshot with the current date-time group. Use the ec2-describe-snapshot API to enumerate existing Amazon EBS snapshots. Call the ec2-delete-snapShot API to prune Amazon EBS snapshots that are tagged with a date- time group older than 30 days.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date-time group, and use the ec2-copy-snapshot API to back up data to the new Amazon EBS volume. Use the ec2- describe-snapshot API to enumerate existing backup volumes. Call the ec2-delete-snaphot API to prune backup Amazon EBS volumes that are tagged with a date-time group older than 30 days.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 11,
            "Name": "Your application uses CloudFormation to orchestrate your application's resources. During your testing phase before the application went live, your Amazon RDS instance type was changed and caused the instance to be re-created, resulting In the loss of test data. How should you prevent this from occurring in the future?",
            "Tag": "CD",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Within the AWS CloudFormation parameter with which users can select the Amazon RDS instance type, set AllowedValues to only contain the current instance type.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use an AWS CloudFormation stack policy to deny updates to the instance. Only allow UpdateStack permission to IAM principals that are denied SetStackPolicy.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "In the AWS CloudFormation template, set the AWS::RDS::DBInstance's DBlnstanceClass property to be read-only.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Subscribe to the AWS CloudFormation notification 'BeforeResourceUpdate' and call CancelStackUpdate if the resource identified is the Amazon RDS instance.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "In the AWS CloudFormation template, set the DeletionPolicy of the AWS::RDS::DBInstance's DeletionPolicy property to 'Retain'", "IsAnswer": true }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 12,
            "Name": "Your company develops a variety of web applications using many platforms and programming languages with different application dependencies. Each application must be developed and deployed quickly and be highly available to satisfy your business requirements. Which of the following methods should you use to deploy these applications rapidly?",
            "Tag": "HA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Develop the applications in Docker containers, and then deploy them to Elastic Beanstalk environments with Auto Scaling and Elastic Load Balancing.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use the AWS CloudFormation Docker import service to build and deploy the applications with high availability in multiple Availability Zones.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Develop each application's code in DynamoDB, and then use hooks to deploy it to Elastic Beanstalk environments with Auto Scaling and Elastic Load Balancing.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Store each application's code in a Git repository, develop custom package repository managers for each application's dependencies, and deploy to AWS OpsWorks in multiple Availability Zones.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 13,
            "Name": "You have a large number of web servers in an Auto Scaling group behind a load balancer. On an hourly basis, you want to filter and process the logs to collect data on unique visitors, and then put that data in a durable data store in order to run reports. Web servers in the Auto Scaling group are constantly launching and terminating based on your scaling policies, but you do not want to lose any of the log data from these servers during a stop/termination initiated by a user or by Auto Scaling. What two approaches will meet these requirements? Choose 2 answers",
            "Tag": "MM&L, HA?",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Install an Amazon Cloudwatch Logs Agent on every web server during the bootstrap process. Create a CloudWatch log group and define Metric Filters to create custom metrics that track unique visitors from the streaming web server logs. Create a scheduled task on an Amazon EC2 instance that runs every hour to generate a new report based on the Cloudwatch custom metrics.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "On the web servers, create a scheduled task that executes a script to rotate and transmit the logs to Amazon Glacier. Ensure that the operating system shutdown procedure triggers a logs transmission when the Amazon EC2 instance is stopped/terminated. Use Amazon Data Pipeline to process the data in Amazon Glacier and run reports every hour.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "On the web servers, create a scheduled task that executes a script to rotate and transmit the logs to an Amazon S3 bucket. Ensure that the operating system shutdown procedure triggers a logs transmission when the Amazon EC2 instance is stopped/terminated. Use AWS Data Pipeline to move log data from the Amazon S3 bucket to Amazon Redshift In order to process and run reports every hour.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Install an AWS Data Pipeline Logs Agent on every web server during the bootstrap process. Create a log group object in AWS Data Pipeline, and define Metric Filters to move processed log data directly from the web servers to Amazon Redshift and run reports every hour.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 14,
            "Name": "You have been tasked with deploying a scalable distributed system using AWS OpsWorks. Your distributed system is required to scale on demand. As it is distributed, each node must hold a configuration file that includes the hostnames of the other instances within the layer. How should you configure AWS OpsWorks to manage scaling this application dynamically?",
            "Tag": "CD",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a Chef Recipe to update this configuration file, configure your AWS OpsWorks stack to use custom cookbooks, and assign this recipe to the Configure LifeCycle Event of the specific layer.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Update this configuration file by writing a script to poll the AWS OpsWorks service API for new instances. Configure your base AMI to execute this script on Operating System startup.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a Chef Recipe to update this configuration file, configure your AWS OpsWorks stack to use custom cookbooks, and assign this recipe to execute when instances are launched.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure your AWS OpsWorks layer to use the AWS-provided recipe for distributed host configuration, and configure the instance hostname and file path parameters in your recipes settings.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 15,
            "Name": "You have an application running on an Amazon EC2 instance and you are using IAM roles to securely access AWS Service APIs. How can you configure your application running on that instance to retrieve the API keys for use with the AWS SDKs?",
            "Tag": "Security",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "When assigning an EC2 IAM role to your instance in the console, in the 'Chosen SDK' drop- down list, select the SDK that you are using, and the instance will configure the correct SDK on launch with the API keys.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Within your application code, make a GET request to the IAM Service API to retrieve credentials for your user.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "When using AWS SDKs and Amazon EC2 roles, you do not have to explicitly retrieve API keys, because the SDK handles retrieving them from the Amazon EC2 MetaData service.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Within your application code, configure the AWS SDK to get the API keys from environment variables, because assigning an Amazon EC2 role stores keys in environment variables on launch.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 16,
            "Name": "When an Auto Scaling group is running in Amazon Elastic Compute Cloud (EC2), your application rapidly scales up and down in response to load within a 10-minute window; however, after the load peaks, you begin to see problems in your configuration management system where previously terminated Amazon EC2 resources are still showing as active. What would be a reliable and efficient way to handle the cleanup of Amazon EC2 resources within your configuration management system? Choose 2 answers",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Write a script that is run by a daily cron job on an Amazon EC2 instance and that executes API Describe calls of the EC2 Auto Scaling group and removes terminated instances from the configuration management system.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure an Amazon Simple Queue Service (SQS) queue for Auto Scaling actions that has a script that listens for new messages and removes terminated instances from the configuration management system.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use your existing configuration management system to control the launching and bootstrapping of instances to reduce the number of moving parts in the automation.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Write a small script that is run during Amazon EC2 instance shutdown to de-register the resource from the configuration management system.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow Service (SWF) to maintain an Amazon DynamoDB database that contains a whitelist of instances that have been previously launched, and allow the Amazon SWF worker to remove information from the configuration management system.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 17,
            "Name": "You have enabled Elastic Load Balancing HTTP health checking. After looking at the AWS Management Console, you see that all instances are passing health checks, but your customers are reporting that your site is not responding. What is the cause?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "The HTTP health checking system is misreporting due to latency in inter-instance metadata synchronization.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "The health check in place is not sufficiently evaluating the application function.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "The application is returning a positive health check too quickly for the AWS Management Console to respond.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Latency in DNS resolution is interfering with Amazon EC2 metadata retrieval.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 18,
            "Name": "You use Amazon CloudWatch as your primary monitoring system for your web application. After a recent software deployment, your users are getting Intermittent 500 Internal Server Errors when using the web application. You want to create a CloudWatch alarm, and notify an on-call engineer when these occur. How can you accomplish this using AWS services? Choose 3 answers",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Deploy your web application as an AWS Elastic Beanstalk application. Use the default Elastic Beanstalk Cloudwatch metrics to capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Install a CloudWatch Logs Agent on your servers to stream web application logs to CloudWatch.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use Amazon Simple Email Service to notify an on-call engineer when a CloudWatch alarm is triggered.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a CloudWatch Logs group and define metric filters that capture 500 Internal Server Errors. Set a CloudWatch alarm on that metric.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon Simple Notification Service to notify an on-call engineer when a CloudWatch alarm is triggered.", "IsAnswer": true },
                { "Id": 1060, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to stream web application logs from your servers to CloudWatch.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 19,
            "Name": "After a daily scrum with your development teams, you've agreed that using Blue/Green style deployments would benefit the team. Which technique should you use to deliver this new requirement?",
            "Tag": "CD",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Re-deploy your application on AWS Elastic Beanstalk, and take advantage of Elastic Beanstalk deployment types.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using an AWS CloudFormation template, re-deploy your application behind a load balancer, launch a new AWS CloudFormation stack during each deployment, update your load balancer to send half your traffic to the new stack while you test, after verification update the load balancer to send 100% of traffic to the new stack, and then terminate the old stack.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer that uses Auto Scaling groups, create a new identical Auto Scaling group, and associate it to the load balancer. During deployment, set the desired number of instances on the old Auto Scaling group to zero, and when all instances have terminated, delete the old Auto Scaling group.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using an AWS OpsWorks stack, re-deploy your application behind an Elastic Load Balancing load balancer and take advantage of OpsWorks stack versioning, during deployment create a new version of your application, tell OpsWorks to launch the new version behind your load balancer, and when the new version is launched, terminate the old OpsWorks stack.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 20,
            "Name": "You have a complex system that involves networking, IAM policies, and multiple, three-tier applications. You are still receiving requirements for the new system, so you don't yet know how many AWS components will be present in the final design. You want to start using AWS CloudFormation to define these AWS resources so that you can automate and version-control your infrastructure. How would you use AWS CloudFormation to provide agile new environments for your customers in a cost-effective, reliable manner?",
            "Tag": "CD, HA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Manually create one template to encompass all the resources that you need for the system, so you only have a single template to version-control.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create multiple separate templates for each logical part of the system, create nested stacks in AWS CloudFormation, and maintain several templates in version-control.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create multiple separate templates for each logical part of the system, and provide the outputs from one to the next using an Amazon Elastic Compute Cloud (EC2) instance running the SDK for finer granularity of control.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Manually construct the networking layer using Amazon Virtual Private Cloud (VPC) because this does not change often, and then use AWS CloudFormation to define all other ephemeral resources.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 21,
            "Name": "Your development team wants account-level access to production instances in order to do live debugging of a highly secure environment. Which of the following should you do?",
            "Tag": "Security",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Place the credentials provided by Amazon Elastic Compute Cloud (EC2) into a secure Amazon Sample Storage Service (S3) bucket with encryption enabled. Assign AWS Identity and Access Management (IAM) users to each developer so they can download the credentials file.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Place an internally created private key into a secure S3 bucket with server-side encryption using customer keys and configuration management, create a service account on all the instances using this private key, and assign IAM users to each developer so they can download the file.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Place each developer's own public key into a private S3 bucket, use instance profiles and configuration management to create a user account for each developer on all instances, and place the user's public keys into the appropriate account.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Place the credentials provided by Amazon EC2 onto an MFA encrypted USB drive, and physically share it with each developer so that the private key never leaves the office.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }

        ,
        {
            "Id": 22,
            "Name": "As part of your continuous deployment process, your application undergoes an I/O load performance test before it is deployed to production using new AMIs. The application uses one Amazon Elastic Block Store (EBS) PIOPS volume per instance and requires consistent I/O performance. Which of the following must be carried out to ensure that I/O load performance tests yield the correct results in a repeatable manner?",
            "Tag": "MM&L, CD",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Ensure that the I/O block sizes for the test are randomly selected.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Ensure that the Amazon EBS volumes have been pre-warmed by reading all the blocks before the test.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Ensure that snapshots of the Amazon EBS volumes are created as a backup.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Ensure that the Amazon EBS volume is encrypted.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Ensure that the Amazon EBS volume has been pre-warmed by creating a snapshot of the volume before the test.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 23,
            "Name": "After reviewing the last quarter's monthly bills, management has noticed an increase in the overall bill from Amazon. After researching this increase in cost, you discovered that one of your new services is doing a lot of GET Bucket API calls to Amazon S3 to build a metadata cache of all objects in the applications bucket. Your boss has asked you to come up with a new cost-effective way to help reduce the amount of these new GET Bucket API calls. What process should you use to help mitigate the cost?",
            "Tag": "governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Update your Amazon S3 buckets' lifecycle policies to automatically push a list of objects to a new bucket, and use this list to view objects associated with the application's bucket.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a new DynamoDB table. Use the new DynamoDB table to store all metadata about all objects uploaded to Amazon S3. Any time a new object is uploaded, update the application's internal Amazon S3 object metadata cache from DynamoDB.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Using Amazon SNS, create a notification on any new Amazon S3 objects that automatically updates a new DynamoDB table to store all metadata about the new object. Subscribe the application to the Amazon SNS topic to update its internal Amazon S3 object metadata cache from the DynamoDB table.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Upload all images to Amazon SQS, set up SQS lifecycles to move all images to Amazon S3, and initiate an Amazon SNS notification to your application to update the application's Internal Amazon S3 object metadata cache.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Upload all images to an ElastiCache filecache server. Update your application to now read all file metadata from the ElastiCache filecache server, and configure the ElastiCache policies to push all files to Amazon S3 for long-term storage.", "IsAnswer": false }],
            "Explanation": "Creating Lifecycle policies doesn't make sense here. Using ElastiCache to store metadata is not a good practice. SQS Lifecycles does not exist. Subsribing to SNS to update internal cache is the best option in this scenario."
        }
        ,
        {
            "Id": 24,
            "Name": "Your current log analysis application takes more than four hours to generate a report of the top 10 users of your web application. You have been asked to implement a system that can report this information in real time, ensure that the report is always up to date, and handle increases in the number of requests to your web application. Choose the option that is cost-effective and can fulfill the requirements.",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Publish your data to CloudWatch Logs, and configure your application to autoscale to handle the load on demand.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Publish your log data to an Amazon S3 bucket. Use AWS CloudFormation to create an Auto Scaling group to scale your post-processing application which is configured to pull down your log files stored an Amazon S3.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Post your log data to an Amazon Kinesis data stream, and subscribe your log-processing application so that is configured to process your logging data.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure an Auto Scaling group to increase the size of your Amazon EMR duster.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Create a multi-AZ Amazon RDS MySQL cluster, post the logging data to MySQL, and run a map reduce job to retrieve the required information on user counts.", "IsAnswer": false }],
            "Explanation": "Only Kinesis can satisfy the 'real-time' processing requirement in this case"
        }
        ,
        {
            "Id": 25,
            "Name": "You are using Elastic Beanstalk to manage your e-commerce store. The store is based on an open source e- commerce platform and is deployed across multiple instances in an Auto Scaling group. Your development team often creates new 'extensions' for the e-commerce store. These extensions include PHP source code as well as an SQL upgrade script used to make any necessary updates to the database schema. You have noticed that some extension deployments fail due to an error when running the SQL upgrade script. After further investigation, you realize that this is because the SQL script is being executed on all of your Amazon EC2 instances. How would you ensure that the SQL script is only executed once per deployment regardless of how many Amazon EC2 instances are running at the time?",
            "Tag": "cd",
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
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new Amazon EC2 instance for build test, unit and integration tests.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Perform syntax and build tests on the continuous integration system before launching the new Amazon EC2 instance unit and integration tests.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Perform all tests on the continuous integration system, using AWS OpsWorks for unit, integration, and build tests.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new AWS Data Pipeline for coordinating the output of unit, integration, and build tests.", "IsAnswer": false }],
            "Explanation": "Use a CI server like Jenkins to build and test code before spinning new EC2 instances."
        }
        ,
        {
            "Id": 27,
            "Name": "You are doing a load testing exercise on your application hosted on AWS. While testing your Amazon RDS MySQL DB instance, you notice that when you hit 100% CPU utilization on it, your application becomes non- responsive. Your application is read-heavy. What are methods to scale your data tier to meet the application's needs? Choose 3 answers",
            "Tag": "ha&elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Add Amazon RDS DB read replicas, and have your application direct read queries to them.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Add your Amazon RDS DB instance to an Auto Scaling group and configure your CloudWatch metric based on CPU utilization.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use an Amazon SQS queue to throttle data going to the Amazon RDS DB instance.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use ElastiCache in front of your Amazon RDS DB to cache common queries.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Shard your data set among multiple Amazon RDS DB instances.", "IsAnswer": true },
                { "Id": 1060, "QuestionId": 1010, "Name": "Enable Multi-AZ for your Amazon RDS DB instance.", "IsAnswer": false }],
            "Explanation": "Read-replicas, Caching and Sharding. Remember these 3 principles for scaling read-heavy apps."
        }
        ,
        {
            "Id": 28,
            "Name": "Your mobile application includes a photo-sharing service that is expecting tens of thousands of users at launch. You will leverage Amazon Simple Storage Service (S3) for storage of the user Images, and you must decide how to authenticate and authorize your users for access to these images. You also need to manage the storage of these images. Which two of the following approaches should you use? Choose 2 answers",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon S3 bucket per user, and use your application to generate the S3 URI for the appropriate content.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS Identity and Access Management (IAM) user accounts as your application-level user database, and offload the burden of authentication from your application code.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Authenticate your users at the application level, and use AWS Security Token Service (STS) to grant token-based authorization to S3 objects.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Authenticate your users at the application level, and send an SMS token message to the user. Create an Amazon S3 bucket with the same name as the SMS message token, and move the user's objects to that bucket.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use a key-based naming scheme comprised from the user IDs for all user objects in a single Amazon S3 bucket.", "IsAnswer": true }],
            "Explanation": "Separate S3 bukcet for each user is not feasible. There is no such thing as 'SMS token'. Using IAM for app-level user DB does not make sense. Eliminating these 3 incorrect options leaves us with the 2 right answers. Use STS and key-based naming scheme for S3 buckets."
        }
        ,
        {
            "Id": 29,
            "Name": "You have an Auto Scaling group of Instances that processes messages from an Amazon Simple Queue Service (SQS) queue. The group scales on the size of the queue. Processing Involves calling a third-party web service. The web service is complaining about the number of failed and repeated calls it is receiving from you. You have noticed that when the group scales in, instances are being terminated while they are processing. What cost-effective solution can you use to reduce the number of incomplete process attempts?",
            "Tag": "ha&elasitcity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a new Auto Scaling group with minimum and maximum of 2 and instances running web proxy software. Configure the VPC route table to route HTTP traffic to these web proxies.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Modify the application running on the instances to enable termination protection while it processes a task and disable it when the processing is complete.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Increase the minimum and maximum size for the Auto Scaling group, and change the scaling policies so they scale less dynamically.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Modify the application running on the instances to put itself into an Auto Scaling 'Standby' state while it processes a task and return itself to 'InService' when the processing is complete.", "IsAnswer": true }],
            "Explanation": "The issue clearly is with the application not handling the external webservice calls properly. The best solution is to modify the app to co-ordinate with the AC states."
        }
        ,
        {
            "Id": 30,
            "Name": "The operations team and the development team want a single place to view both operating system and application logs. How should you implement this using AWS services? Choose 2 answers",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Using AWS CloudFormation, create a CloudWatch Logs LogGroup and send the operating system and application logs of interest using the CloudWatch Logs Agent.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS CloudFormation and configuration management, set up remote logging to send events via UDP packets to CloudTrail.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Using configuration management, set up remote logging to send events to Amazon Kinesis and insert these into Amazon CloudSearch or Amazon Redshift, depending on available analytic tools.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using AWS CloudFormation, create a CloudWatch Logs LogGroup. Because the Cloudwatch Log agent automatically sends all operating system logs, you only have to configure the application logs for sending off-machine.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Using AWS CloudFormation, merge the application logs with the operating system logs, and use IAM Roles to allow both teams to have access to view console output from Amazon EC2.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 31,
            "Name": "The project you are working on currently uses a single AWS CloudFormation template to deploy its AWS infrastructure, which supports a multi-tier web application. You have been tasked with organizing the AWS CloudFormation resources so that they can be maintained in the future, and so that different departments such as Networking and Security can review the architecture before it goes to Production. How should you do this in a way that accommodates each department, using their existing workflows?",
            "Tag": "sec&goverance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Organize the AWS CloudFormation template so that related resources are next to each other in the template, such as VPC subnets and routing rules for Networking and security groups and IAM information for Security.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Separate the AWS CloudFormation template into a nested structure that has individual templates for the resources that are to be governed by different departments, and use the outputs from the networking and security stacks for the application template that you control", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Organize the AWS CloudFormation template so that related resources are next to each other in the template for each department's use, leverage your existing continuous integration tool to constantly deploy changes from all parties to the Production environment, and then run tests for validation.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use a custom application and the AWS SDK to replicate the resources defined in the current AWS CloudFormation template, and use the existing code review system to allow other departments to approve changes before altering the application for future deployments.", "IsAnswer": false }],
            "Explanation": "Best option is to use nested templates for segregation."
        }
        ,
        {
            "Id": 32,
            "Name": "You currently run your infrastructure on Amazon EC2 instances behind an Auto Scaling group. All logs for you application are currently written to ephemeral storage. Recently your company experienced a major bug in code that made it through testing and was ultimately deployed to your fleet. This bug triggered your Auto Scaling group to scale up and back down before you could successfully retrieve the logs off your server to better assist you in troubleshooting the bug. Which technique should you use to make sure you are able to review your logs after your instances have shut down?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure the ephemeral policies on your Auto Scaling group to back up on terminate.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure your Auto Scaling policies to create a snapshot of all ephemeral storage on terminate.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Install the CloudWatch Logs Agent on your AMI, and configure CloudWatch Logs Agent to stream your logs.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Install the CloudWatch monitoring agent on your AMI, and set up new SNS alert for CloudWatch metrics that triggers the CloudWatch monitoring agent to backup all logs on the ephemeral drive.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Install the CloudWatch monitoring agent on your AMI, Update your Auto Scaling policy to enable automated CloudWatch Log copy.", "IsAnswer": false }],
            "Explanation": "You can use the CloudWatch Logs agent installer on an existing EC2 instance to install and configure the CloudWatch Logs agent. After installation is complete, the agent confirms that it has started and it stays running until you disable it. In addition to the agent, you can also publish log data using the AWS CLI, CloudWatch Logs SDK, or the CloudWatch Logs API. The AWS CLI is best suited for publishing data at the command line or through scripts. The CloudWatch Logs SDK is best suited for publishing log data directly from applications or building your own log publishing application.",
            "Ref": "http://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/QuickStartEC2Instance.html"
        }
        ,
        {
            "Id": 33,
            "Name": "Management has reported an increase in the monthly bill from Amazon web services, and they are extremely concerned with this increased cost. Management has asked you to determine the exact cause of this increase. After reviewing the billing report, you notice an increase in the data transfer cost. How can you provide management with a better insight into data transfer use?",
            "Tag": "mm&l, sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Update your Amazon CloudWatch metrics to use five-second granularity, which will give better detailed metrics that can be combined with your billing data to pinpoint anomalies.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon CloudWatch Logs to run a map-reduce on your logs to determine high usage and data transfer.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Deliver custom metrics to Amazon CloudWatch per application that breaks down application data transfer into multiple, more specific data points.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using Amazon CloudWatch metrics, pull your Elastic Load Balancing outbound data transfer metrics monthly, and include them with your billing report to show which application is causing higher bandwidth usage.", "IsAnswer": false }],
            "Explanation": "Using Custom metrics is the best option here. You can publish your own metrics to CloudWatch using the AWS CLI or an API. You can view statistical graphs of your published metrics with the AWS Management Console. For more info on how to publish custom metrics and its advantages see the link.",
            "Ref": "http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html"
        }
        ,
        {
            "Id": 34,
            "Name": "During metric analysis, your team has determined that the company's website is experiencing response times during peak hours that are higher than anticipated. You currently rely on Auto Scaling to make sure that you are scaling your environment during peak windows. How can you improve your Auto Scaling policy to reduce this high response time? Choose 2 answers.",
            "Tag": "ha&elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Push custom metrics to CloudWatch to monitor your CPU and network bandwidth from your servers, which will allow your Auto Scaling policy to have better fine-grain insight.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Increase your Auto Scaling group's number of max servers.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a script that runs and monitors your servers; when it detects an anomaly in load, it posts to an Amazon SNS topic that triggers Elastic Load Balancing to add more servers to the load balancer.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Push custom metrics to CloudWatch for your application that include more detailed information about your web application, such as how many requests it is handling and how many are waiting to be processed.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Update the CloudWatch metric used for your Auto Scaling policy, and enable sub-minute granularity to allow auto scaling to trigger faster.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 35,
            "Name": "You are responsible for your company's large multi-tiered Windows-based web application running on Amazon EC2 instances situated behind a load balancer. While reviewing metrics, you've started noticing an upwards trend for slow customer page load time. Your manager has asked you to come up with a solution to ensure that customer load time is not affected by too many requests per second. Which technique would you use to solve this issue?",
            "Tag": "sec&gov, mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Re-deploy your infrastructure using an AWS CloudFormation template. Configure Elastic Load Balancing health checks to initiate a new AWS CloudFormation stack when health checks return failed.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your infrastructure using an AWS CloudFormation template. Spin up a second AWS CloudFormation stack. Configure Elastic Load Balancing SpillOver functionality to spill over any slow connections to the second AWS CloudFormation stack.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your infrastructure using AWS CloudFormation, Elastic Beanstalk, and Auto Scaling. Set up your Auto Scaling group policies to scale based on the number of requests per second as well as the current customer load time.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your application using an Auto Scaling template. Configure the Auto Scaling template to spin up a new Elastic Beanstalk application when the customer load time surpasses your threshold.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 36,
            "Name": "Your company has multiple applications running on AWS. Your company wants to develop a tool that notifies on-call teams immediately via email when an alarm is triggered in your environment. You have multiple on-call teams that work different shifts, and the tool should handle notifying the correct teams at the correct times. How should you implement this solution?",
            "Tag": "Answer doubtful...sec&gov, mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon SNS topic and an Amazon SQS queue. Configure the Amazon SQS queue as a subscriber to the Amazon SNS topic. Configure CloudWatch alarms to notify this topic when an alarm is triggered. Create an Amazon EC2 Auto Scaling group with both minimum and desired Instances configured to 0. Worker nodes in this group spawn when messages are added to the queue. Workers then use Amazon Simple Email Service to send messages to your on call teams.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create an Amazon SNS topic and configure your on-call team email addresses as subscribers. Use the AWS SDK tools to integrate your application with Amazon SNS and send messages to this new topic. Notifications will be sent to on-call users when a CloudWatch alarm is triggered.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create an Amazon SNS topic and configure your on-call team email addresses as subscribers. Create a secondary Amazon SNS topic for alarms and configure your CloudWatch alarms to notify this topic when triggered. Create an HTTP subscriber to this topic that notifies your application via HTTP POST when an alarm is triggered. Use the AWS SDK tools to integrate your application with Amazon SNS and send messages to the first topic so that on-call engineers receive alerts.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create an Amazon SNS topic for each on-call group, and configure each of these with the team member emails as subscribers. Create another Amazon SNS topic and configure your CloudWatch alarms to notify this topic when triggered. Create an HTTP subscriber to this topic that notifies your application via HTTP POST when an alarm is triggered. Use the AWS SDK tools to integrate your application with Amazon SNS and send messages to the correct team topic when on shift.", "IsAnswer": true }]
        }
        ,
        {
            "Id": 37,
            "Name": "Your company releases new features with high frequency while demanding high application availability. As part of the application's A/B testing, logs from each updated Amazon EC2 instance of the application need to be analyzed in near real-time, to ensure that the application is working flawlessly after each deployment. If the logs show arty anomalous behavior, then the application version of the instance is changed to a more stable one. Which of the following methods should you use for shipping and analyzing the logs in a highly available manner?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Ship the logs to Amazon S3 for durability and use Amazon EMR to analyze the logs in a batch manner each hour.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Ship the logs to Amazon CloudWatch Logs and use Amazon EMR to analyze the logs in a batch manner each hour.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Ship the logs to an Amazon Kinesis stream and have the consumers analyze the logs in a live manner.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Ship the logs to a large Amazon EC2 instance and analyze the logs in a live manner.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Store the logs locally on each instance and then have an Amazon Kinesis stream pull the logs for live analysis.", "IsAnswer": false }],
            "Explanation": "For A/B testing you need to review feedback in near real-time. Hence use Amazon Kinesis streaming service.",
            "Ref": "https://aws.amazon.com/kinesis/"
        }
        ,
        {
            "Id": 38,
            "Name": "You have a code repository that uses Amazon S3 as a data store. During a recent audit of your security controls, some concerns were raised about maintaining the integrity of the data in the Amazon S3 bucket. Another concern was raised around securely deploying code from Amazon S3 to applications running on Amazon EC2 in a virtual private cloud. What are some measures that you can implement to mitigate these concerns? Choose 2 answers.",
            "Tag": "sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Add an Amazon S3 bucket policy with a condition statement to allow access only from Amazon EC2 instances with RFC 1918 IP addresses and enable bucket versioning.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Add an Amazon S3 bucket policy with a condition statement that requires multi-factor authentication in order to delete objects and enable bucket versioning.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use a configuration management service to deploy AWS Identity and Access Management user credentials to the Amazon EC2 instances. Use these credentials to securely access the Amazon S3 bucket when deploying code.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create an Amazon Identity and Access Management role with authorization to access the Amazon S3 bucket, and launch all of your application's Amazon EC2 instances with this role.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to lifecycle the data in your Amazon S3 bucket to Amazon Glacier on a weekly basis.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Use AWS Data Pipeline with multi-factor authentication to securely deploy code from the Amazon S3 bucket to your Amazon EC2 instances.", "IsAnswer": false }],
            "Explanation": "Use IAM role and MFA to prevent accidental deletion of S3 objects."
        }
        ,
        {
            "Id": 39,
            "Name": "You have an application consisting of a stateless web server tier running on Amazon EC2 instances behind load balancer, and are using Amazon RDS with read replicas. Which of the following methods should you use to implement a self-healing and cost-effective architecture? Choose 2 answers.",
            "Tag": "VERIFY ANSWER, ha&elasticity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Set up a third-party monitoring solution on a cluster of Amazon EC2 instances in order to emit custom CloudWatch metrics to trigger the termination of unhealthy Amazon EC2 instances.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up scripts on each Amazon EC2 instance to frequently send ICMP pings to the load balancer in order to determine which instance is unhealthy and replace it.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Set up an Auto Scaling group for the web server tier along with an Auto Scaling policy that uses the Amazon RDS DB CPU utilization CloudWatch metric to scale the instances.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Set up an Auto Scaling group for the web server tier along with an Auto Scaling policy that uses the Amazon EC2 CPU utilization CloudWatch metric to scale the instances.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use a larger Amazon EC2 instance type for the web server tier and a larger DB instance type for the data storage layer to ensure that they don't become unhealthy.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Set up an Auto Scaling group for the database tier along with an Auto Scaling policy that uses the Amazon RDS read replica lag CloudWatch metric to scale out the Amazon RDS read replicas. G. Use an Amazon RDS Multi-AZ deployment.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 40,
            "Name": "Your application is currently running on Amazon EC2 instances behind a load balancer. Your management has decided to use a Blue/Green deployment strategy. How should you implement this for each deployment?",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Set up Amazon Route 53 health checks to fail over from any Amazon EC2 instance that is currently being deployed to.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS CloudFormation, create a test stack for validating the code, and then deploy the code to each production Amazon EC2 instance.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a new load balancer with new Amazon EC2 instances, carry out the deployment, and then switch DNS over to the new load balancer using Amazon Route 53 after testing.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Launch more Amazon EC2 instances to ensure high availability, de-register each Amazon EC2 instance from the load balancer, upgrade it, and test it, and then register it again with the load balancer.", "IsAnswer": false }],
            "Explanation": "For Blue/Green deployment, you have to have another enovironment that mirrors the current one. Do DNS (Route 53) switch to divert traffic from one environment to the other. "
        }
        ,
        {
            "Id": 41,
            "Name": "Your company currently runs a large multi-tier web application. One component is an API service that all other components of your application rely on to perform read/write operations. This service must have high availability and zero downtime during deployments. Which technique should you use to provide cost-effective, zero-downtime deployments for this component?",
            "Tag": "VERIFY,cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use an AWS CloudFormation template to re-deploy your application behind a load balancer, and launch a new AWS CloudFormation stack during each deployment. Update your load balancer to send traffic to the new stack, and then deploy your software. Leave your old stacks running, and tag their resources with the version for rollback.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your application on Elastic Beanstalk. During deployment, create a new version of your application, and create a new environment running that version in Elastic BeanStalk. Finally, take advantage of the Elastic Beanstalk Swap CNAME operation to switch to the new environment.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer that uses Auto Scaling groups. Create a new identical Auto Scaling group and associate it to your Amazon Route53 zone. Configure Amazon Route53 to auto- weight traffic over to the new Auto Scaling group when all instances are marked as healthy.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer using an AWS OpsWorks stack and use AWS OpsWorks stack versioning, during deployment create a new version of your application, tell AWS OpsWorks to launch the new version behind your load balancer, and when the new version is launched, terminate the old AWS OpsWorks stack.", "IsAnswer": false }],
            "Explanation": "Best option is to use Elastic Beanstalk. OpsWorks is a config management service. Because Elastic Beanstalk performs an in-place update when you update your application versions, your application may become unavailable to users for a short period of time. It is possible to avoid this downtime by performing a blue/green deployment, where you deploy the new version to a separate environment, and then swap CNAMEs of the two environments to redirect traffic to the new version instantly. ",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html"
        }
        ,
        {
            "Id": 42,
            "Name": "You want to build a new search tool feature for your monitoring system that will allow your information security team to quickly audit all API calls in your AWS accounts. What combination of AWS services can you use to develop and automate the backend processes supporting this tool? Choose 3 answers.",
            "Tag": "sec, gov, mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon CloudSearch domain for API call logs. Configure the search domain so that it can be used to index API call logs for the search tool.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS CloudTrail to store API call logs in an Amazon S3 bucket. Configure an Amazon Simple Notification Service topic called 'log-notification' that notifies subscribers when new logs are available. Subscribe an Amazon SQS queue to the topic.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use Amazon Cloudwatch to ship AWS CloudTrail logs to your monitoring system.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create an AWS Elastic Beanstalk application in worker role mode that uses an Amazon Simple Email Service (SES) domain to facilitate batch processing new API call log files retrieved from an Amazon S3 bucket into a search index.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use AWS CloudTrail to store API call logs in an Amazon S3 bucket. Configure Amazon Simple Email Service (SES) to notify subscribers when new logs are available. Subscribe an Amazon SQS queue to the email domain.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Create Amazon Cloudwatch custom metrics for the API call logs. Configure a Cloudwatch search domain so that it can be used to index API call logs for the search tool.", "IsAnswer": false },
                { "Id": 1061, "QuestionId": 1010, "Name": "Create an AWS Elastic Beanstalk application in worker role mode that uses an Amazon SQS queue to facilitate batch processing new API call log files retrieved from an Amazon S3 bucket into a search index.", "IsAnswer": true }],
            "Explanation": "Shipping logs by CloudWatch does not make sense. Likewise the other solutions using SES are not the best options"
        }
        ,
        {
            "Id": 43,
            "Name": "You are using AWS Elastic Beanstalk to deploy your application and must make data stored on an Amazon Elastic Block Store (EBS) volume snapshot available to the Amazon Elastic Compute Cloud (EC2) instances. How can you modify your Elastic Beanstalk environment so that the data is added to the Amazon EC2 instances every time you deploy your application?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Add commands to a configuration file in the .ebextensions folder of your deployable archive that mount an additional Amazon EBS volume on launch. Also add a 'BlockDeviceMappings' option, and specify the snapshot to use for the block device in the Auto Scaling launch configuration.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Add commands to a configuration file in the .ebextensions folder of your deployable archive that uses the create-volume Amazon EC2 API or CLI to create a new ephemeral volume based on the specified snapshot and then mounts the volume on launch.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Add commands to the Amazon EC2 user data that will be executed by eb-init, which uses the create- volume Amazon EC2 API or CLI to create a new Amazon EBS volume based on the specified snapshot, and then mounts the volume on launch.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Add commands to the Chef recipe associated with your environment, use the create-volume Amazon EC2 API or CLI to create a new Amazon EBS volume based on the specified snapshot, and then mount the volume on launch.", "IsAnswer": false }],
            "Explanation": "Use the .ebextensions folder for advanced configuration. Creating an ephemeral volume does not satisfy the durability requirement of this use case. See link for additional information.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html"
        }
        ,
        {
            "Id": 44,
            "Name": "You would like to run automated, continuous application level integration tests on all members of an Auto Scaling group. Which two options should you use? Choose 2 answers.",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use the AWS SDK to run the DescribeInstances API call on the Auto Scaling group, and then iterate over the members and remotely connect to each Amazon EC2 instance and run the integration tests.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use the AWS SDK to run the DescribeAutoScalinglnstances API call on the Auto Scaling Group, iterate over the members using the Describe Instances API call, remotely connect to each Amazon EC2 instance, and then run the integration tests.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Set up a custom CloudWatch metric with the output of your integration tests that are run by a scheduled process on each instance, and then set up a CloudWatch alert for any failures.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using an Auto Cycle Group lifecycle policy, define a scheduled task to run integration tests when a new Amazon EC2 instance enters the InService state.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Set up a custom CloudWatch metric that uses the output of the DescribeAutoScalingInstances API call to determine the HealthCheck status of the Amazon EC2 instances.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Using the Auto Cycle Group lifecycle policy, define a scheduled task to run integration tests on individual instances using the Amazon EC2 user data to export test data to CloudWatch Logs.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 45,
            "Name": "Your application Amazon Elastic Compute Cloud (EC2) instances bootstrap by using a master configuration file that is kept in a version-enabled Amazon Simple Storage Service (S3) bucket. Which one of the following methods should you use to securely install the current configuration version onto the instances in a cost-effective way?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an Amazon DynamoDB table to store the different versions of the configuration file. Associate AWS Identity and Access Management (IAM) EC2 roles to the Amazon EC2 instances, and reference the DynamoDB table to get the latest file from Amazon Simple Storage Service (S3).", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Associate an IAM S3 role to the bucket, list the object versions using the Amazon S3 API, and then get the latest object.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Associate an IAM EC2 role to the instances, list the object versions using the Amazon S3 API, and then get the latest object.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Associate an IAM EC2 role to the instances, and then simply get the object from Amazon S3, because the default is the current version.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Store the IAM credentials in the Amazon EC2 user data for each instance, and then simply get the object from S3, because the default is the current version.", "IsAnswer": false }],
            "Explanation": "Self explanatory. Use IAM role for EC2 instances and simply get the object since by default the current is the latest version of the script."
        }
        ,
        {
            "Id": 46,
            "Name": "Your company operates a website for promoters to sell tickets for entertainment events. You are using a load balancer in front of an Auto Scaling group of web servers. Promotion of popular events can cause surges of website visitors. During scaling-out at these times, newly launched instances are unable to complete configuration quickly enough, leading to user disappointment. What options should you choose to improve scaling yet minimize costs? Choose 2 answers.",
            "Tag": "ha,elasticity,cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an AMI with the application pre-configured. Create a new Auto Scaling launch configuration using this new AMI, and configure the Auto Scaling group to launch with this AMI.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use Auto Scaling pre-warming to launch instances before they are required. Configure pre-warming to use the CPU trend CloudWatch metric for the group.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Publish a custom CloudWatch memo from your application on the number of tickets sold, and create an Auto Scaling policy based on this.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use the history of past scaling events for similar event sales to predict future scaling requirements. Use the Auto Scaling scheduled scaling feature to vary the size of the fleet.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Configure an Amazon S3 bucket for website hosting. Upload into the bucket an HTML holding page with its x-amz-website-redirect-location' metadata property set to the load balancer endpoint. Configure Elastic Load Balancing to redirect to the holding page when the load on web servers is above a certain level.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 47,
            "Name": "You're responsible for a popular file sharing application that uses Elastic Load Balancing to distribute traffic to an Amazon EC2 application tier deployed in an Auto Scaling group that runs across multiple Availability Zones. You currently record the number of user file transfers to a log file on the application server, and then write data points from the logs to an Amazon RDS MySQL instance. You aren't happy with how your application scales, and want to implement a new scaling policy based on the average number of user file transfers in a 10-minute period instead of average CPU utilization in the last five minutes. What steps should you take to ensure that your application tier scales based on this new policy? Choose 2 answers",
            "Tag": "mm&l, PROVIDE EXPL",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a new CloudWatch alarm based on the Elastic Load Balancing 'RequestCount' metric that triggers an Auto Scaling action to scale the application tier.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a new CloudWatch alarm based on a custom metric streaming from the Amazon RDS MySQL instance that triggers an Auto Scaling action to scale the application tier.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a new CloudWatch alarm based on a custom metric published from file transfer logs streaming to CloudWatch that triggers an Auto Scaling action to scale the application tier.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a new Auto Scaling launch configuration that includes an Amazon EC2 user data script that installs a CloudWatch Logs Agent on newly launched instances in the application tier. The agent will be configured to stream the file transfers log tile to CloudWatch.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Create a new Auto Scaling launch configuration for the application tier that scales based on an Auto Scaling policy that reads the file transfer log data from the Amazon RIDS MySQL instance.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Create a new Auto Scaling launch configuration that includes an Amazon EC2 user data script that installs an Amazon RDS Logs Agent on newly launched instances in the application tier. The agent will be configured to stream the file transfer data points to the Auto Scaling group.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 48,
            "Name": "Your DevOps team is responsible for a multi-tier, Windows-based web application consisting of web servers, Amazon RDS database instances, and a load balancer behind Amazon Route53. You've been asked by your manager to build a cost-effective rolling deployment solution for this web application. What method should you use?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Re-deploy your application on an AWS OpsWorks stack. Use the AWS OpsWorks done stack feature to allow updates between duplicate stacks.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your application on Elastic Beanstalk and take advantage of Elastic BeanStalk rolling updates.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application using an AWS CloudFormation template, launch a new AWS CloudFormation stack during each deployment, and then tear down the old stack.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your application using an AWS CloudFormation template. Use AWS CloudFormation rolling deployment policies, create a new policy for your AWS CloudFormation stack, and initiate an update stack operation to deploy new code.", "IsAnswer": true }],
            "Explanation": "Use Cloudformation with the 'AutoScalingRollingUpdate' policy. See link for more information.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html"
        }
        ,
        {
            "Id": 49,
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
        }
        ,
        {
            "Id": 50,
            "Name": "You have a high-traffic application running behind a load balancer with clients that are very sensitive to latency. How should you determine which back-end Amazon Elastic Compute Cloud application instances are causing increased latency so that they can be replaced?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "By using the Elastic Load Balancing Latency CloudWatch metric.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "By using the HTTP X-Forwarded-For header for requests from the load balancer.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "By running a distributed load test to the load balancer.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "By using the load balancer access logs.", "IsAnswer": true }],
            "Explanation": "The ELB access logs should tell you based on timestamps which of the EC2 instances have high latency."
        }
        ,
        {
            "Id": 51,
            "Name": "Your company operates an application consisting of an AWS CloudFormation stack that contains a load balancer, an Auto Scaling group of web servers, and an Amazon RDS instance. To save time and costs, you update the current test stack when testing minor changes, and create a new stack for major changes. As part of the testing procedure of your application, each version needs to be registered once and only once with a Configuration Management Database (CMDB). What cost-effective solution should you choose to perform this registration?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use Auto Scaling Leader Node functionality to notify the registration application from the UserData script of a single Instance. Use the AWS CloudFormation cfn-hup helper application to receive template updates on the leader node, which then notifies the CMDB.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Define an AWS: :CloudFormation::CustomResource in the AWS CloudFormation template, with the application version as one of its properties. Modify the CMDB to subscribe to the resource's creation and update notifications.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Define an AWS::CloudFormation::HttpRequest in the AWS CloudFormation template, and configure it to notify the CMDB on stack creation and update.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Define an AWS::EC2::Instance resource in the AWS CloudFormation template that is configured to run a UserData script to notify the CMDB and then terminate itself on completion.", "IsAnswer": false }],
            "Explanation": "Custom resources enable you to write custom provisioning logic in templates that AWS CloudFormation runs anytime you create, update (if you changed the custom resource), or delete stacks. See link for reference.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html"
        }
        ,
        {
            "Id": 52,
            "Name": "You manage a three-tier web application consisting of an autoscaled web proxy tier, an autoscaled application tier, and an Amazon RDS database tier. You use a load balancer to distribute requests from end users to the web proxy tier and another, internal load balancer to distribute requests between the web tier and the application tier. After deploying a small database schema update, you notice that all of your web and application instances have been terminated. What may have caused this?",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Your load balancers use an HTTP health check, and the page relies on retrieving data from your database.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Your load balancer use TCP health checks to provide application-level health checks.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "The cooldown period of the Auto Scaling group is too short, so the instances don't have enough time to recover from an issue.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Your Auto Scaling group health check type is set to 'EC2' to check that the instances themselves are healthy.", "IsAnswer": false }],
            "Explanation": "1) Health-check type of 'EC2' does not make sense. 2)  If an instance becomes unhealthy, Auto Scaling does not wait for the cooldown period to complete before replacing the unhealthy instance. So this option is also not the correct answer. Correct answer is that the LB uses HTTP health checks and the page relies on retrieving data from your database.",
            "Ref": "http://docs.aws.amazon.com/autoscaling/latest/userguide/Cooldown.html"
        }
        ,
        {
            "Id": 53,
            "Name": "Your organization has decided to implement a third-party configuration management tool that uses a master server from which nodes pull configuration. You have built a custom base Amazon Machine Image that already has the third-party configuration management agent installed. You want to use the same base AMI in Development, Test and Production environments, each of which has its own master server. How should you configure your Amazon EC2 instances to register with the correct master server on launch?",
            "Tag": "cs&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a tag for all instances that specifies their environment. When launching instances, provide an Amazon EC2 UserData script that gets this tag by querying the MetaData Service and registers the agent with the master.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon CloudFormation to describe your environment. Configure an input parameter for the master server hostname/address, and use this parameter within an Amazon EC2 UserData script that registers the agent with the master.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a script on your third-party configuration management master server that queries the Amazon EC2 API for new instances and registers them with it.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow Service to automate the process of registering new instances with your master server. Use an Environment tag in Amazon EC2 to register instances with the correct master server.", "IsAnswer": false }],
            "Explanation": "Refer the best practices link for implementing a third-party Configuration Management solution like Chef, Puppet, Ansible or Salt on AWS.",
            "Ref": "https://aws.amazon.com/answers/configuration-management/aws-infrastructure-configuration-management/"
        }
        ,
        {
            "Id": 54,
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
            "Id": 55,
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
        }
        ,
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
            "Id": 57,
            "Name": "You manage a web advertising platform on a single AWS account. This platform produces real- time ad-click data that you store as objects in an Amazon S3 bucket called 'click-data'. Your advertising partners want to use Amazon Elastic MapReduce in their own AWS accounts to do analytics on the ad-click data. They' ve asked for immediate access to the ad-click data so that they can run analytics. Which two choices are required to facilitate secure access to this data? Choose 2 answers.",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a cross-account IAM role with a trust policy that contains partner AWS account IDs and a unique external ID.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a new IAM group for AWS Data Pipeline users with a trust policy that contains partner AWS account IDs.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Configure an Amazon S3 bucket policy for the 'click-data' bucket that allows Read-Only access to the objects, and associate this policy with an IAM role.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure the Amazon S3 bucket access control list to allow access to the partners Amazon Elastic MapReduce cluster.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Configure AWS Data Pipeline in the partner AWS accounts to use the web Identity Federation API to access data in the 'click-data' bucket.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Configure AWS Data Pipeline to transfer the data from the ''click-data' bucket to the partner's Amazon Elastic MapReduce cluster.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 58,
            "Name": "You run a SIP-based telephony application that uses Amazon EC2 for its web tier and uses MySQL on Amazon RDS as its database. The application stores only the authentication profile data for its existing users in the database and therefore is read-intensive. Your monitoring system shows that your web instances and the database have high CPU utilization. Which of the following steps should you take in order to ensure the continual availability of your application? Choose 2 answers",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a CloudFront RTMP download distribution with the application tier as the origin for the distribution.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Set up an Auto Scaling group for the application tier and a policy that scales based on the Amazon EC2 CloudWatch CPU utilization metric.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Vertically scale up the Amazon EC2 instances manually.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Set up an Auto Scaling group for the application tier and a policy that scales based on the Amazon RDS CloudWatch CPU utilization metric.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Switch to General Purpose (SSD) Storage from Provisioned IOPS Storage (PIOPS) for the Amazon RDS database.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Use multiple Amazon RDS read replicas.", "IsAnswer": true }],
            "Explanation": "Use Autoscaling for Web tier to enable horizontal scaling. For Database tier use read-replicas."
        }
        ,
        {
            "Id": 59,
            "Name": "Your team is responsible for an AWS Elastic Beanstalk application. The business requires that you move to a continuous deployment model, thus releasing updates to the application multiple times per day with zero downtime. What should you do to enable this and still be able to roll back to the previous version almost immediately in an emergency?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Enable rolling updates in the Elastic Beanstalk environment and set an appropriate pause time for application startup.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Create a second Elastic Beanstalk environment that runs the new application version, and swap the environment CNAMEs", "IsAnswer": false},
                { "Id": 1057, "QuestionId": 1010, "Name": "Configure the application to poll for a new application version in your code repository; download and install the new version to each running Elastic Beanstalk instance.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a second Elastic Beanstalk environment with the new application version, and configure the old environment to use the HTTP 301 response code to redirect clients to the new environment.", "IsAnswer": false }],
            "Explanation": "You can enable and configure rolling updates in the Elastic Beanstalk Management Console. See link for details.",
            "Ref": "http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.rollingupdates.html"
        }
        ,
        {
            "Id": 60,
            "Name": "Your Company wants to perform A/B testing on a new website feature for 20 percent of its users. The website uses CloudFront for whole site delivery, with some content cached for up to 24 hours. How do you enable this testing for the required proportion of users while minimizing performance impact?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure the web servers to handle two domain names. The feature is switched on or off depending on which domain name is used for a request. Configure a CloudFront origin for each domain name, and configure the CloudFront distribution to use one origin for 20 percent of users and the other origin for the other 80 percent.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure the CloudFront distribution to forward a cookie specific to this feature. For requests where the cookie is not set, the web servers set its value to 'on' for 20 percent of responses and 'off' for 80 percent. For requests where the cookie is set, the web servers use its value to determine whether the feature should be on or off for the response.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a second stack of web servers that host the website with the feature on. Using Amazon Route53, create two resource record sets with the same name: one with a weighting of '1' and a value of this new stack; the other a weighting of '4' and a value of the existing stack. Use the resource record set's name as the CloudFront distribution's origin.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Invalidate all of the CloudFront distribution's cache items that the feature affects. On future requests, the web servers create responses with the feature on for 20 percent of users, and off for 80 percent. The web servers set 'Cache-Control: no-cache' on all of these responses.", "IsAnswer": false }]
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
            "Id": 62,
            "Name": "You are building a large, multi-tenant SaaS (software-as-a-service) application with a component that fetches data to process from a customer-specific Amazon S3 bucket in their account. How should you ensure that your application follows security best practices and limits risk when fetching data from customer-owned Amazon S3 buckets?",
            "Tag": "security",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Have users create an IAM user with a policy that grants read-only access to the Amazon S3 bucket required by your application, and store the corresponding access keys in an encrypted database that holds their account data.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Have users create a cross-account lAM role with a policy that grants read-only access to the Amazon S3 bucket required by your application to the AWS account ID running your production Sass application.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Have users create an Amazon S3 bucket policy that grants read-only access to the Amazon S3 bucket required by your application, and securely store the corresponding access keys in the database holding their account data.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Have users create an Amazon S3 bucket policy that grants read-only access to the Amazon S3 bucket required by your application and limits access to the public IP address of the SaaS application.", "IsAnswer": false }],
            "Explanation": "See link for how to delegate access across AWS accounts using IAM roles",
            "Ref": "http://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html"
        }
        ,
        {
            "Id": 63,
            "Name": "You have a fleet of Elastic Compute Cloud (EC2) instances in an Auto Scaling group. All of these instances are running Microsoft Windows Server 2012 backed by Amazon Elastic Block Store (EBS). These instances were launched through AWS CloudFormation. You have determined that your instances are underutilized, and in order to save some money, have decided to modify the instance type of the fleet. In which of the following ways can you achieve the desired result during a scheduled maintenance window? Choose 2 answers",
            "Tag": "sec&governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a new Auto Scaling launch configuration specifying the new instance type, associate it to the existing Auto Scaling group, and terminate the running instances.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Identify the new instance type in the user data and restart the running instances one at a time.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use the AWS Command Line Interface (CLI) to modify the instance type of each running instance.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Change the instance type in the AWS CloudFormation template that was used to create the Amazon EC2 instances, and then update the stack.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Take snapshots of the running instances, and launch new instances based on those snapshots.", "IsAnswer": false }]
        }
        ,
        {
            "Id": 64,
            "Name": "You run a large number of applications on Amazon EC2 instances. Each application has associated metadata, such as cost center, support contact, and application ID. Many applications usually co-exist on each Amazon EC2 instance, so the amount of metadata per instance can range from 10 to 200 items. The customer wants to be able to quickly access this metadata using an API without logging into the instances. Which of the following options will satisfy their requirements? Choose 2 answers",
            "Tag": "sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create individual Amazon EC2 tags for each metadata item, and associate them with the Amazon EC2 instances. Access the metadata by using the ec2-describe-instance API call.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create compound Amazon EC2 tags for the metadata items, where multiple items are joined together in individual tags, and associate them with the Amazon EC2 instances. Access the metadata by using the ec2-describe-tags API call.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a DynamoDB table to hold the metadata, and associate it with the Amazon EC2 instance IDs running the applications. Access the metadata by querying the database via the DynamoDB API.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "As part of the Amazon EC2 Instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by using the ec2-describe-instance API call.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "As part of the Amazon EC2 instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by accessing its loopback address from a management instance in the same VPC.", "IsAnswer": false }],
            "Explanation": "To maximize the 50 tags that can be assigned to a resource, consider using compound tags. Compound tags combine multiple key-value pairs into a single key paired with a string comprised of multiple pipe delimited ‘values’. By doing this, you might combine the 3 keys “Ownername”, “OwnerPhone”, and “OwnerEmail” into one “OwnerContact” key paired with a pipe delimited string of values for name, phone, and e-mail address, such as: John Doe|1-555-555-1212|jdoe@example.com. The other option is to use DynamoDB to store the metadata.",
            "Ref": "https://aws.amazon.com/premiumsupport/knowledge-center/ec2-resource-tags/"
        }
        ,
        {
            "Id": 65,
            "Name": "You have an application running on multiple Amazon EC2 instances within an Auto Scaling group. You notice that instances are being re-spawned as their health checks are failing in Amazon EC2. However, before you have a chance to diagnose the issue, the affected instances are being terminated by the Auto Scaling service. You receive notifications of health checks failing and investigate within 20 minutes. However, this is not enough time to troubleshoot the issue. What should you change that will enable you to troubleshoot the instance before it is terminated by the Auto Scaling service, while keeping costs minimal?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Install the Amazon CloudWatch Logs Agent on the instance and configure application and system logs to be sent to the CloudWatch Logs service.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure an Amazon SNS topic and associate it with your Auto Scaling group's CloudWatch alarms. Configure an Amazon SQS queue as a subscriber of this topic, and then create a fleet of Amazon EC2 workers that poll this queue and instruct the Amazon EC2 Auto Scaling API to remove the instance from the Auto Scaling group when an alarm is triggered.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create an Auto Scaling Group lifecycle hook to hold the instance in a 'terminating:wait' state until you have completed any troubleshooting. When you have completed troubleshooting, wait for the terminating state to expire, or notify to Scaling to complete the lifecycle hook and terminate the Instance.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Change the 'DeleteOnTermination' flag to false in the Auto Scaling group configuration to ensure that instances are not deleted in the future.", "IsAnswer": false }],
            "Explanation": "Auto Scaling lifecycle hooks enable you to perform custom actions by pausing instances as Auto Scaling launches or terminates them. For example, while your newly launched instance is paused, you could install or configure software on it.",
            "Ref": "http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html"
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
            "Id": 67,
            "Name": "You have just come from your Chief Information Security Officer's (CISO) office with the instructions to provide an audit report of all AWS network rules used by the organization's Amazon EC2 instances. You have discovered that a single Describe-Security-Groups API call will return all of an account's security groups and rules within a region. You create the following pseudo-code to create the required report: - Parse 'aws ec2 describe-security-groups' output - For each security group - Create report of ingress and egress rules. Which two additional pieces of logic should you include to meet the CISO's requirements? Choose 2 answers",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Parse security groups in each region.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Parse security groups in each Availability Zone and region.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Evaluate VPC network access control lists.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Evaluate AWS CloudTrail logs.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Evaluate Elastic Load Balancing access control lists.", "IsAnswer": false },
                { "Id": 1060, "QuestionId": 1010, "Name": "Parse CloudFront access control lists.", "IsAnswer": false }]
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
            "Id": 71,
            "Name": "Your application has an Auto Scaling group of m3.large instances running an application that receives messages from an Amazon SQS queue. After a while, the number of instances reaches the maximum set for the group and the number of messages on the queue continues to increase. You have discovered that a third- party library used by the application has a bug that causes a memory leak. What cost-effective steps can you take to continue message processing while the library developer fixes the bug?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Enable Elastic Load Balancing health checks for the Auto Scaling group. When Elastic Load Balancing has detected a failure, Auto Scaling will terminate the failing application's instance and launch a new one.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon EC2 instance memory usage CloudWatch metrics to raise alerts when they reach a defined level and send a message to Auto Scaling to fail the instance health check.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use application monitoring on the instance to restart the application when memory usage reaches a defined level.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create a new Auto Scaling launch configuration to use the r3.large instance type. Update the Auto Scaling group with the new launch configuration.", "IsAnswer": true}],
            "Explanation": "The only correct option is to vertically scale by using a larfer r3.large instance till the memory leak issue is fixed by the library developer"
        }
        ,
        {
            "Id": 72,
            "Name": "You are in charge of a large-scale highly available multi-tier web application infrastructure. This architecture consists of Amazon Route53 with a load balancer and multiple Amazon EC2 instances. You have been tasked to come up with a process to provide Blue/Green style deployments. Which technique should you use to deliver this new requirement?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Using Elastic Beanstalk re-deploy your application and configure Elastic Beanstalk Deployment types, and then use Amazon Route53's alias resource record set to swap between Elastic Beanstalk deployment types.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer using an AWS CloudFormation template, launch a new AWS CloudFormation stack during each deployment, update your Amazon Route53 alias resource record set to point to the new load balancer, and finally, terminate your old AWS CloudFormation stack.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer using Auto Scaling groups, create a new identical Auto Scaling group, and associate it to the load balancer. During deployment, create a new Amazon Route53 hosted zone, add this new load balancer to the zone in an alias resource record set, and then remove your old Auto Scaling group.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Re-deploy your application behind a load balancer using an OpsWorks stack, and use AWS OpsWorks stack versioning. During deployment, create a new version of your application, tell OpsWorks to launch the new version behind your load balancer, and when the new version launches, update your Amazon Route53 alias resource retort to point to the new load balancer.", "IsAnswer": false }],
            "Explanation": "Best option is to use Cloudformation to spin up new stack, use Route53 alias record to perform a DNS switch from the old stack to the new stack and terminate the old stack."
        }  ,
        {
            "Id": 73,
            "Name": "Your application uses Amazon SQS and Auto Scaling to process background jobs. The Auto Scaling policy is based on the number of messages in the queue, with a maximum Instance count of 100. Since the application was launched, the group has never scaled above 50. The Auto Scaling group has now scaled to 100, the queue size is increasing, and very few Jobs are being completed. The number of messages being sent to the queue is at normal levels. What should you do to identify why the queue size is unusually high, and to reduce it?",
            "Tag": "ha&elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Temporarily increase the Auto Scaling group's desired value to 200. When the queue size has been reduced, reduce it to 50.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Analyze the application logs to identify possible reasons for message processing failure and resolve the cause for failures.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create additional Auto Scaling groups, enabling the processing of the queue to be performed in parallel.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Analyze CloudTrail logs for Amazon SQS to ensure that the instances' Amazon EC2 role has permission to receive messages from the queue.", "IsAnswer": false }],
            "Explanation": "The most correct option is to start by troubleshooting the logs to see if there are any failures to process the SQS messages."
        }  ,
        {
            "Id": 74,
            "Name": "You have a web application that is currently running on a collection of micro instance types in a single AZ behind a single load balancer. You have an Auto Scaling group configured to scale from 2 to 64 instances. When reviewing your CloudWatch metrics, you see that sometimes your Auto Scaling group is running 64 micro instances. The web application is reading and writing to a DynamoDB-configured backend and configured with 800 Write Capacity Units and 800 Read Capacity Units. Your customers are complaining that they are experiencing long load times when viewing your website. You have investigated the DynamoDB CloudWatch metrics; you are under the provisioned Read and write Capacity Units and there is no throttling. How do you scale your service to improve the load times and ensure the principles of high availability?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Change your Auto Scaling group configuration to include multiple AZs.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Change your Auto Scaling group configuration to include multiple AZs, and increase the number of Read Capacity Units in your DynamoDB table by a factor of three, because you will need to be calling DynarnoDB from three AZs.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Add a second load balancer to your Auto Scaling group so that you can support more inbound connections per second.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Change your Auto Scaling group configuration to use larger instances and include multiple AZ's instead of one.", "IsAnswer": true}],
            "Explanation": "For high-availability you have to use multiple AZs. To improve load times you have to scale. In this case, scale vertically by using larger instance types in multiple-AZs"
        }  ,
        {
            "Id": 75,
            "Name": "Your social media marketing application has a component written in Ruby running on AWS Elastic Beanstalk. This application component posts messages to social media sites in support of various marketing campaigns. Your management now requires you to record replies to these social media messages to analyze the effectiveness of the marketing campaign in comparison to past and future efforts. You' ve already developed a new application component to interface with the social media site APIs in order to read the replies. Which process should you use to record the social media replies in a durable data store that can be accessed at any time for analysis of historical data?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Deploy the new application component in an Auto Scaling group of Amazon Elastic Compute Cloud (EC2) Instances, read the data from the social media sites, store it with Amazon Elastic Block Store, and use AWS Data Pipeline to publish it to Amazon Kinesis for analytics.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Deploy the new application component as an Elastic Beanstalk application, read the data from the social media sites, store it in Amazon DynamoDB, and use Apache Hive with Amazon Elastic MapReduce for analytics.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Deploy the new application component in an Auto Scaling group of Amazon EC2 instances, read the data from the social media sites, store it in Amazon Glacier, and use AWS Data Pipeline to publish it to Amazon Redshift for analytics.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Deploy the new application component as an Amazon Elastic Beanstalk application, read the data from the social media site, store it with Amazon Elastic Block Store, and use Amazon Kinesis to stream the data to Amazon CloudWatch for analytics.", "IsAnswer": false }],
            "Explanation": "Use DnyanamoDB for storing the replies in a durable store and use Hive and EMR for Data Analytics",
            "Ref": "https://aws.amazon.com/emr/"
        }  ,
        {
            "Id": 76,
            "Name": "A web application is being actively developed by multiple development teams within your organization. You have created a self-service portal-driven by AWS CloudFormation and the AWS APIs-that allows testers to select a code branch containing a new feature that they want to test. The portal will then provision an environment and deploy the right branch of code to it. Recently you have noticed that a large number of environments contain broken builds. You want to introduce a set of automated browser tests that are executed on a new environment before the environment is available to the tester. This way a tester does not waste time trying to test new features in a broken environment. Select a suitable way to implement such a feature into the existing self-service portal:",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Specify your automated tests in the 'tests' section of the AWS CloudFormation template. AWS CloudFormation will then execute the tests on your behalf as part of the environment build.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure a centralized test server that hosts an automated browser testing framework. Use an AWS CloudFormation custom resource to notify the centralized test server, via an Amazon SNS topic, that a new environment has been initialized. The centralized test server can then execute the tests before sending the results back to the AWS CloudFormation service.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Pass the test scripts to the cfn-init service via the 'tests' section of the AWS::CloudFormation::Init metadata. Cfn-init will then execute these tests and return the result to the AWS CloudFormation service.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Configure a centralized test server that hosts an automated browser testing framework. Include an Amazon SES email resource under the outputs section of your AWS CloudFormation template. This we send an email to your centralized test server, informing it that the environment is ready for tests.", "IsAnswer": false }]
        }  ,
        {
            "Id": 77,
            "Name": "You have written a server-side Node.Js application and a web application with an HTML/JavaScript front end that uses the Angular.js framework. The server-side application connects to an Amazon Redshift cluster, issues queries, and then returns the results to the front end for display. Your user base is very large and distributed, but it is important to keep the cost of running this application low. Which deployment strategy is both technically valid and the most cost-effective?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Deploy an AWS Elastic Beanstalk application with two environments: one for the Node.js application and another for the web front end. Launch an Amazon Redshift cluster, and point your application to its Java Database Connectivity (JDBC) endpoint.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Deploy an AWS OpsWorks stack with three layers: a static web server layer for your front end, a Node.js app server layer for your server-side application, and a Redshift DB layer for your Amazon Redshift cluster.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Upload the HTML, CSS, images, and JavaScript for the front end to an Amazon Simple Storage Service (S3) bucket. Create an Amazon CloudFront distribution with this bucket as its origin. Use AWS Elastic Beanstalk to deploy the Node.js application. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Upload the HTML, CSS, images, and JavaScript for the front end, plus the Node.js code for the server-side application, to an Amazon S3 bucket. Create a CloudFront distribution with this bucket as its origin. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Upload the HTML, CSS, images, and JavaScript for the front end to an Amazon S3 bucket. Use AWS Elastic Beanstalk to deploy the Node.js application. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.", "IsAnswer": false }],
            "Explanation": "The principle to use is keep all the static content of your site in S3 buckets and serve them via Cloudfront. Deploy your application in Elastic Beanstalk and connect your application to the back-end database (Redshift) using JDBC."
        }  ,
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
        },
        {
            "Id": 81,
            "Name": "For AWS Auto Scaling, what is the first transition state an instance enters after leaving steady state when scaling in due to health check failure or decreased load?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Terminating", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Detaching", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Terminating:Wait", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "EnteringStandby", "IsAnswer": false }],
            "Explanation": "When Auto Scaling responds to a scale in event, it terminates one or more instances. These instances are detached from the Auto Scaling group and enter the Terminating state.",
            "Ref": "http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html"
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
            "Id": 84,
            "Name": "You work for a company that automatically tags photographs using artificial neural networks (ANNs), which run on GPUs using C++. You receive millions of images at a time, but only 3 times per day on average. These images are loaded into an AWS S3 bucket you control for you in a batch, and then the customer publishes a JSON-formatted manifest into another S3 bucket you control as well. Each image takes 10 milliseconds to process using a full GPU. Your neural network software requires 5 minutes to bootstrap. Image tags are JSON objects, and you must publish them to an S3 bucket. Which of these is the best system architectures for this system?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an OpsWorks Stack with two Layers. The first contains lifecycle scripts for launching and bootstrapping an HTTP API on G2 instances for ANN image processing, and the second has an always-on instance which monitors the S3 manifest bucket for new files. When a new file is detected, request instances to boot on the ANN layer. When the instances are booted and the HTTP APIs are up, submit processing requests to individual instances.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Make an S3 notification configuration which publishes to AWS Lambda on the manifest bucket. Make the Lambda create a CloudFormation Stack which contains the logic to construct an autoscaling worker tier of EC2 G2 instances with the ANN code on each instance. Create an SQS queue of the images in the manifest. Tear the stack down when the queue is empty.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Deploy your ANN code to AWS Lambda as a bundled binary for the C++ extension. Make an S3 notification configuration on the manifest, which publishes to another AWS Lambda running controller code. This controller code publishes all the images in the manifest to AWS Kinesis. Your ANN code Lambda Function uses the Kinesis as an Event Source. The system automatically scales when the stream contains image events.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create an Auto Scaling, Load Balanced Elastic Beanstalk worker tier Application and Environment. Deploy the ANN code to G2 instances in this tier. Set the desired capacity to 1. Make the code periodically check S3 for new manifests. When a new manifest is detected, push all of the images in the manifest into the SQS queue associated with the Elastic Beanstalk worker tier.", "IsAnswer": false }],
            "Explanation": "The Elastic Beanstalk option is incorrect because it requires a constantly-polling instance, which may break and costs money. The Lambda fleet option is incorrect because AWS Lambda does not support GPU usage. The OpsWorks stack option both requires a constantly-polling instance, and also requires complex timing and capacity planning logic. The CloudFormation option requires no polling, has no always-on instances, and allows arbitrarily fast processing by simply setting the instance count as high as needed.",
            "Ref": "http://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html"
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
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability- zones.html#concepts- regions-availability-zones"
        }
        ,
        {
            "Id": 86,
            "Name": "You need to create a Route53 record automatically in CloudFormation when not running in production during all launches of a Template. How should you implement this?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a 'Parameter' for 'Environment', and add a 'Condition' on the Route53 'Resource' in the template to create the record only when 'environment' is not 'production'.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Create two templates, one with the Route53 record value and one with a null value for the record. Use the one without it when deploying to production.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use a 'Parameter' for 'environment', and add a 'Condition' on the Route53 'Resource' in the template to create the record with a null string when 'environment' is 'production'.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create two templates, one with the Route53 record and one without it. Use the one without it when deploying to production.", "IsAnswer": false }],
            "Explanation": "The best way to do this is with one template, and a Condition on the resource. Route53 does not allow null strings for records.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section- structure.html"
        } ,
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
        },
        {
            "Id": 99,
            "Name": "You are building a deployment system on AWS. You will deploy new code by bootstrapping instances in a private subnet in a VPC at runtime using UserData scripts pointing to an S3 zip file object, where your code is stored. An ELB in a public subnet has network interfaces and connectivity to the instances. Requests from users of the system are routed to the ELB via a Route53 A Record Alias. You do not use any VPC endpoints. Which is a risk of using this approach?",
            "Tag": "sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Route53 Alias records do not always update dynamically with ELB network changes after deployments.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "If the NAT routing for the private subnet fails, deployments fail.", "IsAnswer": true},
                { "Id": 1057, "QuestionId": 1010, "Name": "Kernel changes to the base AMI may render the code inoperable.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "The instances cannot be in a private subnet if the ELB is in a public one.", "IsAnswer": false }],
            "Explanation": "Since you are not using VPC endpoints, outbound requests for the code sitting in S3 are routed though the NAT for the VPC's private subnets. If this networking fails, runtime bootstrapping through code download will fail due to network unavailability and lack of access to the Internet, and thus Amazon S3.",
            "Ref": "http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html"
        },
        {
            "Id": 100,
            "Name": "Which major database needs a BYO license?",
            "Tag": "sec&governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "PostgreSQL", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "MariaDB", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "MySQL", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Oracle", "IsAnswer": true}],
            "Explanation": "Oracle is not open source, and requires a bring your own license model.",
            "Ref": "http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html"
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
            "Id": 112,
            "Name": "You need to know when you spend $1000 or more on AWS. What's the easy way for you to see that notification?",
            "Tag": "MM&L",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "AWS CloudWatch Events tied to API calls, when certain thresholds are exceeded, publish to SNS.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Scrape the billing page periodically and pump into Kinesis.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS CloudWatch Metrics + Billing Alarm + Lambda event subscription. When a threshold is exceeded, email the manager.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Scrape the billing page periodically and publish to SNS.", "IsAnswer": false }],
            "Explanation": "Even if you're careful to stay within the free tier, it's a good idea to create a billing alarm to notify you if you exceed the limits of the free tier. Billing alarms can help to protect you against unknowingly accruing charges if you inadvertently use a service outside of the free tier or if traffic exceeds your expectations.",
            "Ref": "http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-alarms.html"
        }
        ,
        {
            "Id": 113,
            "Name": "You need to grant a vendor access to your AWS account. They need to be able to read protected messages in a private S3 bucket at their leisure. They also use AWS. What is the best way to accomplish this?",
            "Tag": "sec& gvo",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create an IAM User with API Access Keys. Grant the User permissions to access the bucket. Give the vendor the AWS Access Key ID and AWS Secret Access Key for the User.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create an EC2 Instance Profile on your account. Grant the associated IAM role full access to the bucket. Start an EC2 instance with this Profile and give SSH access to the instance to the vendor.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a cross-account IAM Role with permission to access the bucket, and grant permission to use the Role to the vendor AWS account.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Generate a signed S3 PUT URL and a signed S3 PUT URL, both with wildcard values and 2 year durations. Pass the URLs to the vendor.", "IsAnswer": false }],
            "Explanation": "When third parties require access to your organization's AWS resources, you can use roles to delegate access to them. For example, a third party might provide a service for managing your AWS resources. With IAM roles, you can grant these third parties access to your AWS resources without sharing your AWS security credentials. Instead, the third party can access your AWS resources by assuming a role that you create in your AWS account.",
            "Ref": "http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html"
        }
        ,
        {
            "Id": 114,
            "Name": "Your serverless architecture using AWS API Gateway, AWS Lambda, and AWS DynamoDB experienced a large increase in traffic to a sustained 400 requests per second, and dramatically increased in failure rates. Your requests, during normal operation, last 500 milliseconds on average. Your DynamoDB table did not exceed 50% of provisioned throughput, and Table primary keys are designed correctly. What is the most likely issue?",
            "Tag": "governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Your API Gateway deployment is throttling your requests.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Your AWS API Gateway Deployment is bottlenecking on request (de)serialization.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "You did not request a limit increase on concurrent Lambda function executions.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "You used Consistent Read requests on DynamoDB and are experiencing semaphore lock.", "IsAnswer": false }],
            "Explanation": "AWS API Gateway by default throttles at 500 requests per second steady-state, and 1000 requests per second at spike. Lambda, by default, throttles at 100 concurrent requests for safety. At 500 milliseconds (half of a second) per request, you can expect to support 200 requests per second at 100 concurrency. This is less than the 400 requests per second your system now requires. Make a limit increase request via the AWS Support Console. AWS Lambda: Concurrent requests safety throttle per account -> 100",
            "Ref": "http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_lambda"
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
            "Id": 118,
            "Name": "Your CTO thinks your AWS account was hacked. What is the only way to know for certain if there was unauthorized access and what they did, assuming your hackers are very sophisticated AWS engineers and doing everything they can to cover their tracks?",
            "Tag": "sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use CloudTrail Log File Integrity Validation.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS Config SNS Subscriptions and process events in real time.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudTrail backed up to AWS S3 and Glacier.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS Config Timeline forensics.", "IsAnswer": false }],
            "Explanation": "You must use CloudTrail Log File Validation (default or custom implementation), as any other tracking method is subject to forgery in the event of a full account compromise by sophisticated enough hackers. Validated log files are invaluable in security and forensic investigations. For example, a validated log file enables you to assert positively that the log file itself has not changed, or that particular user credentials performed specific API activity. The CloudTrail log file integrity validation process also lets you know if a log file has been deleted or changed, or assert positively that no log files were delivered to your account during a given period of time.",
            "Ref": "http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html"
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
            "Id": 126,
            "Name": "You are designing an enterprise data storage system. Your data management software system requires mountable disks and a real filesystem, so you cannot use S3 for storage. You need persistence, so you will be using AWS EBS Volumes for your system. The system needs as low- cost storage as possible, and access is not frequent or high throughput, and is mostly sequential reads. Which is the most appropriate EBS Volume Type for this scenario?",
            "Tag": "governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "gp1", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "io1", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "standard", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "gp2", "IsAnswer": false }],
            "Explanation": "Standard volumes, or Magnetic volumes, are best for: Cold workloads where data is infrequently accessed, or scenarios where the lowest storage cost is important.",
            "Ref": "http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html"
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
            "Name": "",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 130,
            "Name": "",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
        ,
        {
            "Id": 131,
            "Name": "",
            "Tag": "",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        }
    ]
}