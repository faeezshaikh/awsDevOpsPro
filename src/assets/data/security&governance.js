{
    "quiz": {
        "name": "Security, Governance, & Validation",
            "logo" : "assets/img/SQS.png",
                "time":"20 minutes"
    },
    "questions": [
        {
            "Id": 1,
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
            "Id": 2,
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
            "Id": 3,
            "Name": "You run a large number of applications on Amazon EC2 instances. Each application has associated metadata, such as cost center, support contact, and application ID. Many applications usually co-exist on each Amazon EC2 instance, so the amount of metadata per instance can range from 10 to 200 items. The customer wants to be able to quickly access this metadata using an API without logging into the instances. Which of the following options will satisfy their requirements? Choose 2 answers",
            "Tag": "sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create individual Amazon EC2 tags for each metadata item, and associate them with the Amazon EC2 instances. Access the metadata by using the ec2-describe-instance API call.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Create compound Amazon EC2 tags for the metadata items, where multiple items are joined together in individual tags, and associate them with the Amazon EC2 instances. Access the metadata by using the ec2-describe-tags API call.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a DynamoDB table to hold the metadata, and associate it with the Amazon EC2 instance IDs running the applications. Access the metadata by querying the database via the DynamoDB API.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "As part of the Amazon EC2 Instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by using the ec2-describe-instance API call.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "As part of the Amazon EC2 instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by accessing its loopback address from a management instance in the same VPC.", "IsAnswer": false }],
            "Explanation": "To maximize the 50 tags that can be assigned to a resource, consider using compound tags. Compound tags combine multiple key-value pairs into a single key paired with a string comprised of multiple pipe delimited ‘values’. By doing this, you might combine the 3 keys “Ownername”, “OwnerPhone”, and “OwnerEmail” into one “OwnerContact” key paired with a pipe delimited string of values for name, phone, and e-mail address, such as: John Doe|1-555-555-1212|jdoe@example.com. The other option is to use DynamoDB to store the metadata.",
            "Ref": "https://aws.amazon.com/premiumsupport/knowledge-center/ec2-resource-tags/"
        },
        {
            "Id": 4,
            "Name": "Which major database needs a BYO license?",
            "Tag": "sec&governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "PostgreSQL", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "MariaDB", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "MySQL", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Oracle", "IsAnswer": true}],
            "Explanation": "Oracle is not open source, and requires a bring your own license model.",
            "Ref": "http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Oracle.html"
        } ,
        {
            "Id": 5,
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
            "Id": 6,
            "Name": "Your serverless architecture using AWS API Gateway, AWS Lambda, and AWS DynamoDB experienced a large increase in traffic to a sustained 400 requests per second, and dramatically increased in failure rates. Your requests, during normal operation, last 500 milliseconds on average. Your DynamoDB table did not exceed 50% of provisioned throughput, and Table primary keys are designed correctly. What is the most likely issue?",
            "Tag": "governance",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Your API Gateway deployment is throttling your requests.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Your AWS API Gateway Deployment is bottlenecking on request (de)serialization.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "You did not request a limit increase on concurrent Lambda function executions.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "You used Consistent Read requests on DynamoDB and are experiencing semaphore lock.", "IsAnswer": false }],
            "Explanation": "AWS API Gateway by default throttles at 500 requests per second steady-state, and 1000 requests per second at spike. Lambda, by default, throttles at 100 concurrent requests for safety. At 500 milliseconds (half of a second) per request, you can expect to support 200 requests per second at 100 concurrency. This is less than the 400 requests per second your system now requires. Make a limit increase request via the AWS Support Console. AWS Lambda: Concurrent requests safety throttle per account -> 100",
            "Ref": "http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_lambda"
        }   ,
        {
            "Id": 7,
            "Name": "Your CTO thinks your AWS account was hacked. What is the only way to know for certain if there was unauthorized access and what they did, assuming your hackers are very sophisticated AWS engineers and doing everything they can to cover their tracks?",
            "Tag": "sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use CloudTrail Log File Integrity Validation.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS Config SNS Subscriptions and process events in real time.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudTrail backed up to AWS S3 and Glacier.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS Config Timeline forensics.", "IsAnswer": false }],
            "Explanation": "You must use CloudTrail Log File Validation (default or custom implementation), as any other tracking method is subject to forgery in the event of a full account compromise by sophisticated enough hackers. Validated log files are invaluable in security and forensic investigations. For example, a validated log file enables you to assert positively that the log file itself has not changed, or that particular user credentials performed specific API activity. The CloudTrail log file integrity validation process also lets you know if a log file has been deleted or changed, or assert positively that no log files were delivered to your account during a given period of time.",
            "Ref": "http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-log-file-validation-intro.html"
        },
        {
            "Id": 8,
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
    ]
}