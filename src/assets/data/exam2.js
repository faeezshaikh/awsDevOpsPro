{
    "quiz": {
        "name": "Exam 2",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "You require the ability to analyze a large amount of data which is stored on Amazon S3 using Amazon Elastic MapReduce. You are using the cc2.8xlarge instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?", 
        "Tag":"???",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create fewer, larger files m Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use smaller instances that have higher aggregate I/O performance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create more, smaller files on Amazon S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add additional cc2.8xlarge instances by introducing a task group.", "IsAnswer": false }]
    } 
    ,
    {
        "Id": 10,
        "Name": "Which of the following are valid CloudWatch Alarm states? (Choose 3)", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "ACTIVE", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DISABLED", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "OK", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "ON", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "INSUFFICIENT_DATA", "IsAnswer": true },
            { "Id": 1060, "QuestionId": 1010, "Name": "ALARM", "IsAnswer": true }],
        "Explanation":"CloudWatch Alarms have three possible states: OK, ALARM and INSUFFICIENT_DATA.",
        "Ref": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"
    } ,
    {
        "Id": 11,
        "Name": "What is a CloudWatch Dimension?", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A container of metrics", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A list of metric names", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A name/value pair that helps you to uniquely identify/group metrics", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "An axis on a metric graph", "IsAnswer": false }],
        "Explanation":"A dimension allows you to uniquely identify metrics, for example, EC2 metrics allow you to group your metrics by the 'AutoScalingGroupName' dimension.",
        "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html"
    } ,
    {
        "Id": 18,
        "Name": "What is a CloudWatch Alarm?", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A service that initiates an action based on a CloudWatch metric state", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "A notification to tell you CloudWatch has stopped working", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "An AWS broadcast regarding the state of CloudWatch", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "A service that automatically creates alarms based on your metrics", "IsAnswer": false }],
        "Explanation":"An alarm watches a single metric over a time period you specify, and performs one or more actions based on the value of the metric relative to a given threshold over a number of time periods. ",
        "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html"
    } ,
    {
        "Id": 19,
        "Name": "CloudWatch Alarms can be sent to (select two):", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SES", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "AutoScaling", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": true }],
        "Explanation":"The CloudWatch alarm action is a notification sent to an Amazon Simple Notification Service topic or Auto Scaling policy.",
        "Ref":"http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ConsoleAlarms.html"
    } 
    ,
    {
        "Id": 20,
        "Name": "What best describes an 'Auto Scaling Group?'", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A collection of launch configurations", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A collection of Elastic Load Balancers in the same Region or Availability Zone", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A collection of EC2 instances treated as a logical group", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "A collection of CloudFront edge servers", "IsAnswer": false }],
        "Explanation":"An Auto Scaling group contains a collection of EC2 instances that share similar characteristics and are treated as a logical grouping for the purposes of instance scaling and management.",
        "Ref":"https://docs.aws.amazon.com/autoscaling/latest/userguide/AutoScalingGroup.html"
    }  ,
    {
        "Id": 21,
        "Name": "What kind of read replicas can Amazon Aurora use? (Choose 2)", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MySQL Read Replicas", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL Read Replicas", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Oracle Read Replicas", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Aurora Replicas", "IsAnswer": true }],
        "Explanation":"Amazon Aurora can use MySQL and Aurora replicas.",
        "Ref":"https://aws.amazon.com/rds/aurora/faqs/#high-availability-and-replication"
    }  ,
    {
        "Id": 22,
        "Name": "What does a Launch Configuration define?", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AMI ID", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Key Pair", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Security groups", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Instance Type", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "All of the other options", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "None of the other options", "IsAnswer": false }],
        "Explanation":"Launch configurations define all of the above. ",
        "Ref":"https://docs.aws.amazon.com/autoscaling/latest/userguide/LaunchConfiguration.html"
    }  ,
    {
        "Id": 23,
        "Name": "What is Auto Scaling Self Healing good for? (choose 2) ", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Killing servers which aren't required to keep costs down.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Keeping servers highly available", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ensuring autoscaling groups scale correctly", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Creating self-healing, immutable infrastructure.", "IsAnswer": true }],
        "Explanation":"Auto scaling self healing is a concept where we can use auto scaling groups to create low cost, self healing immutable infrastructure without having to install or configure additional software to keep your servers highly available without any user interaction."
    }  ,
    {
        "Id": 24,
        "Name": "What is Kinesis Firehose used for?", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "To process and analyze large streams of data records in real time", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "To run standard SQL queries against streaming data", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "To load streaming data from hundreds and thousands of sources into Amazon S3 and Amazon Redshift", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "To connect EC2 instances to CloudWatch", "IsAnswer": false }],
        "Explanation":"Amazon Kinesis Firehose is the easiest way to load streaming data into AWS. It can capture and automatically load streaming data into Amazon S3 and Amazon Redshift, enabling near real-time analytics with existing business intelligence tools and dashboard.",
        "Ref":"https://aws.amazon.com/kinesis/firehose/"
    } ,
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
},
{
    "Id": 1,
    "Name": "Which of the following are valid types of custom resource backing in Cloud Formation (Choose 2)", 
    "Tag":"cd&pa",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "SQS - Simple Queue Service - allowing a fleet of EC2 instances to service requests from a custom resource.", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "Lambda - Lambda backed custom resources allow event driven compute in response to stack creation, deletion and updates", "IsAnswer": true },
        { "Id": 1057, "QuestionId": 1010, "Name": "SWF - Simple workflow services backed custom resources allows integration with complex human and automated workflows", "IsAnswer": false },
        { "Id": 1058, "QuestionId": 1010, "Name": "SNS - Simple Notification Services backed Custom Resources, allows integration with other AWS and external services", "IsAnswer": true },
        { "Id": 1059, "QuestionId": 1010, "Name": "S3 - S3 backed custom resources allow data created or requested by CloudFormation to be read/written to S3 in a resilient way", "IsAnswer": false }],
    "Explanation": "valid backings for custom resources are Lambda and SNS - Lambda backed is only supported in regions where lambda is available, SNS can be used to tun lambda in OTHER regions in response to a cloud formation event"
}  ,
{
    "Id": 2,
    "Name": "You've been tasked to produce cloud formation templates for a business application. The application has 3 development stages, dev, stage and prod which use different types and sizes of infrastructure. Additionally you need to deploy the application to three regions, each of which requires different AMI's for servers and may have alternative numbers of Availability zones. What is the minimum number of templates required to achieve this business objective.", 
    "Tag":"cd&pa",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "3 Templates - One for each development stage, but using a combination of mappings and pseudo-parameters to allow regions portability.", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "9 Templates - One for each development stage containing the required resource types and sizes (Total 3, dev, stage, prod), and for each of those sets, 1 per region each with unique AMI's and availability zone ID's", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "1 Template - using conditional functions such as Fn::If to allow resource selection based on a development stage parameter and pseudo parameters and mappings allowing region portability.", "IsAnswer": true},
        { "Id": 1058, "QuestionId": 1010, "Name": "3 Templates - One for each region, but using a combination of functions and conditionals allowing one template to be portable across development stages", "IsAnswer": false }],
    "Explanation":"Using the advanced elements of CloudFormation its possible to achieve all of the functionality with 1 template. By specifying the development environment type, i.e dev, stage or prod, the template can select resource sizes and type by using conditional functions. Resources can be created ONLY if the environment type is PROD for example. Using a combination of mapping blocks and pseudo parameters alternative AMI's can be specified based on the region, and AZ's can be selected by using the Fn::Select function rather than being specified manually."
} 
,
{
    "Id": 3,
    "Name": "You have an OPSWorks stack consisting of 4 layers for a multi tier application. Each layer contains 4 instances for a total of 16. You add another instance to Layer 1. How many instances will the configure recipe run on.", 
    "Tag":"cd&pa",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "16 - All instance in the stack except the instance being added.", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "17 - the instance being added to the layer, the remaining instances in that layer, and all other instances in the stack.", "IsAnswer": true },
        { "Id": 1057, "QuestionId": 1010, "Name": "1 - the instance being added to the layer.", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "5 - the instance being added to the layer AND the remaining instances in that layer.", "IsAnswer": false }],
    "Explanation":"If an instance enters or leaves an online state - i.e like it does when being created/added to a stack the configure lifecycle event is run on ALL instance in the stack including itself."
} 
,
{
    "Id": 4,
    "Name": "You've been tasked with creating a 1-click, unattended CloudFormation template which can deploy an application and associated infrastructure within an AWS Region, without asking for parameters, The Template should be able to be applied via the console or programmatically as part of an automated provisioning system. In order to fit into the organisations DEVOPS system, the template should be equally capable or being applied once, ten times, or 100+ times in multiple regions world wide. Each of your VPCs will be connected in a hub and spoke architecture with your head office data center. Management have asked that you design your CloudFormation template so that it can be applied to any region and will create infrastructure as appropriate for the above requirements. Select all appropriate answers below which will form part of your solution. The solution should minimise the amount of infrastructure required to support the auto-provisioning activitiesc (Choose 3)", 
    "Tag":"cd,pa",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "A lambda-backed custom resource together with a lambda function that consults a DynamoDB or RDS database containing configuration management information.", "IsAnswer": true},
        { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB - holding a database of used IP addresses from a worldwide IP plan.", "IsAnswer": true },
        { "Id": 1057, "QuestionId": 1010, "Name": "A CloudFormation template containing resources to provision for the application, omitting resource names allowing CloudFormation to select semi-random values. Use pseudo-parameters where appropriate.", "IsAnswer": true},
        { "Id": 1058, "QuestionId": 1010, "Name": "Simple workflow service, orchestrating the creation of the resources and auto selecting an IP range for the subnets in each VPC, allowing VPN Hub and Spoke Connectivity.", "IsAnswer": false },
        { "Id": 1059, "QuestionId": 1010, "Name": "A custom resource backed by SQS, and a set of EC2 worker instances checking a configuration management database containing infrastructure configuration information.", "IsAnswer": false },
        { "Id": 1060, "QuestionId": 1010, "Name": "MySQL RDS - holding a database of used IP addresses from a worldwide IP plan.", "IsAnswer": false },
        { "Id": 1061, "QuestionId": 1010, "Name": "A CloudFormation template containing resources to provision for the application, containing resource names where appropriate within the template to confirm to the organization's resource-naming scheme.", "IsAnswer": false }],
    "Explanation":"An ideal solution which meets all of the above requirements is a CloudFormation template which contains no resource names - this allows the template to be applied multiple times, avoiding resource naming conflicts. Using pseudo-parameters allows the template to be fully portable across regions. Using DynamoDB allows storage of configuration management information, but minimises the costs used for the automation. Use a Lambda backed custom resource to interact with the database allocating and de-allocating subnets and other important elements of configuration. Resources within the CFN template can use the GetAtt function to interact with the custom resource and retrieve configuration data. RDS should be avoided as it has costs even when not in use. Simple workflow service offers no real assistance with this scenario. A SQS backed custom resource is not possible within CloudFormation."
} 
,
{
    "Id": 5,
    "Name": "You've been asked to retrofit an existing application to make use of elastic beanstalk. The application is written in a language and uses frameworks not natively supported by Elastic Beanstalk AND uses a VERY specific set of dependency versions how can you accomplish the deployment using AWS tools and services. Pick the correct answer", 
    "Tag":"cd&pa",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "Use OPSWorks and the custom layer type to deploy an elastic beanstalk environment using the specific set of dependencies required. Use the layer options to deploy the custom language runtimes", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "Manually build an elastic beanstalk environment starting with the base EC2 instance and using CloudFormation add the EB build components to support the application", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudFormation to deploy a custom elastic beanstalk environment, using bootstrapping to add the specific dependencies and runtime required to support your application", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "Produce a docker container containing your application, all requirements and specific dependency versions. Upload to a private docker registry and use elastic beanstalk to deploy the docker container", "IsAnswer": false }],
    "Explanation":"If you dockerize your application you are bundling all dependencies together and making it portable. This way your app is guaranteed to run on any platform as long as it supports Docker"
} 
,
{
    "Id": 6,
    "Name": "Which of the following apply to OpsWork Instance Auto Healing?", 
    "Tag":"cd&pa",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "If an instance is terminated outside of OPSWorks control, it is recreated using the OS image it was using at the time of termination", "IsAnswer": true},
        { "Id": 1056, "QuestionId": 1010, "Name": "If an application running on an instance fails, auto healing will recreate the instance and re-deploy the failed application, running a configuration life cycle event on all the layers instances", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "If an instance is terminated outside of OPSWorks control, it is recreated using the OS image specified within the stack configuration at the time of termination", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "If an EBS backed instance fails a status check, its restarted", "IsAnswer": true }],
    "Explanation":""
} 
,
{
    "Id": 7,
    "Name": "Which of the following best describes 'CloudWatch Events'?", 
    "Tag":"mm&l",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "A real-time stream of events", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "A faster version of CloudTrail", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "The Central Nervous System of AWS", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "All of the other options", "IsAnswer": true }],
    "Explanation":"Amazon describe CloudWatch events as all of the above. See link for further details",
    "Ref":"https://aws.amazon.com/blogs/aws/new-cloudwatch-events-track-and-respond-to-changes-to-your-aws-resources/"
} 
,
{
    "Id": 8,
    "Name": "Which of the following describes 'CloudWatch Namespace?'", 
    "Tag":"mm&l",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "A service used to store log files", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "A list of metric names", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "A name/value pair that helps you to uniquely identify a metric", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "A container of metrics", "IsAnswer": true }],
    "Explanation":"Namespaces are containers for metrics. Metrics are isolated from one another in different namespaces so that metrics from different applications are not mistakenly aggregated into the same statistics Further information: ",
    "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CW_Support_For_AWS.html"
} 
,
{
    "Id": 9,
    "Name": "Which of the following best describes 'CloudWatch Logs?'", 
    "Tag":"mm&l",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "A history of CloudWatch alarm state changes", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "A service that converts CloudWatch metrics into log files for processing", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "A service to store system, application and custom logs", "IsAnswer": true},
        { "Id": 1058, "QuestionId": 1010, "Name": "All of the other options", "IsAnswer": false }],
    "Explanation":"You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, or other sources. Further information: ",
    "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html"
} 
,
{
    "Id": 12,
    "Name": "What are the two kinds of CloudTrail trails you can create? (Choose 2)", 
    "Tag":"mm&l",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "One Availability Zone", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "One Region", "IsAnswer": true },
        { "Id": 1057, "QuestionId": 1010, "Name": "Multi-AZ", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "All Regions", "IsAnswer": true }],
    "Explanation":"You can create two types of trails, a trail that applies to all regions and a trail that applies to one region.",
    "Ref":"http://docs.aws.amazon.com/awscloudtrail/latest/userguide/how-cloudtrail-works.html"
} ,  
{
    "Id": 13,
    "Name": "The three main features of CloudWatch Logs are: (Choose 3)", 
    "Tag":"mm&l",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "Automatically transfer CloudWatch alarm logs to S3", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "Archive log data", "IsAnswer": true },
        { "Id": 1057, "QuestionId": 1010, "Name": "Monitor AWS CloudTrail logged events", "IsAnswer": true},
        { "Id": 1058, "QuestionId": 1010, "Name": "Monitor Logs fom EC2 instances in realtime", "IsAnswer": true }]
} ,
{
    "Id": 27,
    "Name": "When does the Auto Scaling Lifecycle start?", 
    "Tag":"ha, elasticity",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "When the Auto Scaling Group takes an instance out of service and terminates the instance.", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "When the Auto Scaling Group initializes an instance and puts it into service.", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "When the Auto Scaling Group configures an instance and puts it into service.", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "When the Auto Scaling Group launches an instance and puts it into service.", "IsAnswer": true }],
    "Explanation":"The auto scaling lifecycle refers to the life of an EC2 instance which is attached to an auto scaling group. The lifecycle starts when the Auto Scaling group launches an instance and puts it into service.",
    "Ref":"https://docs.aws.amazon.com/autoscaling/latest/userguide/AutoScalingGroupLifecycle.html"
}  ,
{
    "Id": 28,
    "Name": "Which of the following techniques will let you perform multiple processes on the same piece of data at the same time using SQS? ", 
    "Tag":"ha, elasticity",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "Flushout", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "Multi-part upload", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "Fanout", "IsAnswer": true},
        { "Id": 1058, "QuestionId": 1010, "Name": "Hub and Spoke", "IsAnswer": false }]
}  ,
{
    "Id": 29,
    "Name": "What is Kinesis Streams used for?", 
    "Tag":"ha, elasticity",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "To run standard SQL queries against streaming data", "IsAnswer": false },
        { "Id": 1056, "QuestionId": 1010, "Name": "To connect EC2 instances to CloudWatch", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "To process and analyze large streams of data records in real time", "IsAnswer": true},
        { "Id": 1058, "QuestionId": 1010, "Name": "To load streaming data from hundreds and thousands of sources into Amazon S3 and Amazon Redshift", "IsAnswer": false }],
    "Explanation":"Amazon Kinesis Streams enables you to build custom applications that process or analyze streaming data for specialized needs.",
    "Ref":""
}  ,
{
    "Id": 30,
    "Name": "Which of the following are not true?", 
    "Tag":"ha, elasticity",
    "Options": [
        { "Id": 1055, "QuestionId": 1010, "Name": "You can not use lifecyle hooks with spot instances", "IsAnswer": true },
        { "Id": 1056, "QuestionId": 1010, "Name": "Autoscaling Lifecycle hooks allow you to perform custom actions as AutoScaling launches or terminates instances", "IsAnswer": false },
        { "Id": 1057, "QuestionId": 1010, "Name": "The maximum amount of time you can keep your server in a wait state is 48 hours", "IsAnswer": false},
        { "Id": 1058, "QuestionId": 1010, "Name": "The conclusion of a lifecycle hook has two states: ABANDON or CONTINUE", "IsAnswer": false }],
    "Explanation":"You can use lifecycle hooks with spot instances.",
    "Ref":"https://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html"
}  


    
    ]
}

