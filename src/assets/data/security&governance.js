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
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a DynamoDB table to hold the metadata, and associate it with the Amazon EC2 instance IDs running the applications. Access the metadata by querying the database via the DynamoDB API.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "As part of the Amazon EC2 Instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by using the ec2-describe-instance API call.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "As part of the Amazon EC2 instance bootstrapping process, add the metadata to the Amazon EC2 user data. Access the metadata by accessing its loopback address from a management instance in the same VPC.", "IsAnswer": false }],
            "Explanation": "To maximize the 50 tags that can be assigned to a resource, consider using compound tags. Compound tags combine multiple key-value pairs into a single key paired with a string comprised of multiple pipe delimited ‘values’. By doing this, you might combine the 3 keys “Ownername”, “OwnerPhone”, and “OwnerEmail” into one “OwnerContact” key paired with a pipe delimited string of values for name, phone, and e-mail address, such as: John Doe|1-555-555-1212|jdoe@example.com. The other option is to use DynamoDB to store the metadata.",
            "Ref": "https://aws.amazon.com/premiumsupport/knowledge-center/ec2-resource-tags/"
        }
    ]
}