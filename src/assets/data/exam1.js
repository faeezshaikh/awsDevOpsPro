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
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
     ,
       {
        "Id": 2,
        "Name": "", 
        "Tag":"Security",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
            "Explanation":"",
            "Ref":""
    } 
    
   
     ]
}