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
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 12,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 13,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 14,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 15,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 16,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 17,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 18,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } ,
    {
        "Id": 19,
        "Name": "", 
        "Tag":"mm&l",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
 
    ]
}

