{
    "quiz": {
        "name": "Exam 3",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
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
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 25,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 26,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 27,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 28,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 29,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 30,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 31,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 32,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 33,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    }  ,
    {
        "Id": 34,
        "Name": "", 
        "Tag":"ha, elasticity",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":"",
        "Ref":""
    } 
 
    ]
}

