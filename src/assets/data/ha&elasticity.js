{
    "quiz": {
        "name": "High Availability & Elasticity",
            "logo" : "assets/img/VPC.png",
                "time":"20 minutes"
    },
    "questions": [
        {
            "Id": 1,
            "Name": "You've been tasked with implementing an automated data backup solution for your application servers that run on Amazon EC2 with Amazon EBS volumes. You want to use a distributed data store for your backups to avoid single points of failure and to increase the durability of the data. Daily backups should be retained for 30 days so that you can restore data within an hour. How can you implement this through a script that a scheduling daemon runs daily on the application servers?",
            "Tag": "HA",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date time group, and copy backup data to a second Amazon EBS volume. Use the ec2-describe-volumes API to enumerate existing backup volumes. Call the ec2-delete-volume API to prune backup volumes that are tagged with a date-tine group older than 30 days.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Write the script to call the Amazon Glacier upload archive API, and tag the backup archive with the current date-time group. Use the list vaults API to enumerate existing backup archives Call the delete vault API to prune backup archives that are tagged with a date-time group older than 30 days.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-snapshot API, and tag the Amazon EBS snapshot with the current date-time group. Use the ec2-describe-snapshot API to enumerate existing Amazon EBS snapshots. Call the ec2-delete-snapShot API to prune Amazon EBS snapshots that are tagged with a date- time group older than 30 days.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Write the script to call the ec2-create-volume API, tag the Amazon EBS volume with the current date-time group, and use the ec2-copy-snapshot API to back up data to the new Amazon EBS volume. Use the ec2- describe-snapshot API to enumerate existing backup volumes. Call the ec2-delete-snaphot API to prune backup Amazon EBS volumes that are tagged with a date-time group older than 30 days.", "IsAnswer": false }],
            "Explanation": "",
            "Ref": ""
        },
        {
            "Id": 2,
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
        },
        {
            "Id": 3,
            "Name": "You have an Auto Scaling group of Instances that processes messages from an Amazon Simple Queue Service (SQS) queue. The group scales on the size of the queue. Processing Involves calling a third-party web service. The web service is complaining about the number of failed and repeated calls it is receiving from you. You have noticed that when the group scales in, instances are being terminated while they are processing. What cost-effective solution can you use to reduce the number of incomplete process attempts?",
            "Tag": "ha&elasitcity",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Create a new Auto Scaling group with minimum and maximum of 2 and instances running web proxy software. Configure the VPC route table to route HTTP traffic to these web proxies.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Modify the application running on the instances to enable termination protection while it processes a task and disable it when the processing is complete.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Increase the minimum and maximum size for the Auto Scaling group, and change the scaling policies so they scale less dynamically.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Modify the application running on the instances to put itself into an Auto Scaling 'Standby' state while it processes a task and return itself to 'InService' when the processing is complete.", "IsAnswer": true }],
            "Explanation": "The issue clearly is with the application not handling the external webservice calls properly. The best solution is to modify the app to co-ordinate with the AC states."
        },
        {
            "Id": 4,
            "Name": "Your application uses Amazon SQS and Auto Scaling to process background jobs. The Auto Scaling policy is based on the number of messages in the queue, with a maximum Instance count of 100. Since the application was launched, the group has never scaled above 50. The Auto Scaling group has now scaled to 100, the queue size is increasing, and very few Jobs are being completed. The number of messages being sent to the queue is at normal levels. What should you do to identify why the queue size is unusually high, and to reduce it?",
            "Tag": "ha&elastic",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Temporarily increase the Auto Scaling group's desired value to 200. When the queue size has been reduced, reduce it to 50.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Analyze the application logs to identify possible reasons for message processing failure and resolve the cause for failures.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create additional Auto Scaling groups, enabling the processing of the queue to be performed in parallel.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Analyze CloudTrail logs for Amazon SQS to ensure that the instances' Amazon EC2 role has permission to receive messages from the queue.", "IsAnswer": false }],
            "Explanation": "The most correct option is to start by troubleshooting the logs to see if there are any failures to process the SQS messages."
        } ,
        {
            "Id": 5,
            "Name": "You have a web application that is currently running on a collection of micro instance types in a single AZ behind a single load balancer. You have an Auto Scaling group configured to scale from 2 to 64 instances. When reviewing your CloudWatch metrics, you see that sometimes your Auto Scaling group is running 64 micro instances. The web application is reading and writing to a DynamoDB-configured backend and configured with 800 Write Capacity Units and 800 Read Capacity Units. Your customers are complaining that they are experiencing long load times when viewing your website. You have investigated the DynamoDB CloudWatch metrics; you are under the provisioned Read and write Capacity Units and there is no throttling. How do you scale your service to improve the load times and ensure the principles of high availability?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Change your Auto Scaling group configuration to include multiple AZs.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Change your Auto Scaling group configuration to include multiple AZs, and increase the number of Read Capacity Units in your DynamoDB table by a factor of three, because you will need to be calling DynarnoDB from three AZs.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Add a second load balancer to your Auto Scaling group so that you can support more inbound connections per second.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Change your Auto Scaling group configuration to use larger instances and include multiple AZ's instead of one.", "IsAnswer": true}],
            "Explanation": "For high-availability you have to use multiple AZs. To improve load times you have to scale. In this case, scale vertically by using larger instance types in multiple-AZs"
        } ,
        {
            "Id": 6,
            "Name": "You have written a server-side Node.Js application and a web application with an HTML/JavaScript front end that uses the Angular.js framework. The server-side application connects to an Amazon Redshift cluster, issues queries, and then returns the results to the front end for display. Your user base is very large and distributed, but it is important to keep the cost of running this application low. Which deployment strategy is both technically valid and the most cost-effective?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Deploy an AWS Elastic Beanstalk application with two environments: one for the Node.js application and another for the web front end. Launch an Amazon Redshift cluster, and point your application to its Java Database Connectivity (JDBC) endpoint.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Deploy an AWS OpsWorks stack with three layers: a static web server layer for your front end, a Node.js app server layer for your server-side application, and a Redshift DB layer for your Amazon Redshift cluster.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Upload the HTML, CSS, images, and JavaScript for the front end to an Amazon Simple Storage Service (S3) bucket. Create an Amazon CloudFront distribution with this bucket as its origin. Use AWS Elastic Beanstalk to deploy the Node.js application. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.", "IsAnswer": true},
                { "Id": 1058, "QuestionId": 1010, "Name": "Upload the HTML, CSS, images, and JavaScript for the front end, plus the Node.js code for the server-side application, to an Amazon S3 bucket. Create a CloudFront distribution with this bucket as its origin. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.", "IsAnswer": false },
                { "Id": 1059, "QuestionId": 1010, "Name": "Upload the HTML, CSS, images, and JavaScript for the front end to an Amazon S3 bucket. Use AWS Elastic Beanstalk to deploy the Node.js application. Launch an Amazon Redshift cluster, and point your application to its JDBC endpoint.", "IsAnswer": false }],
            "Explanation": "The principle to use is keep all the static content of your site in S3 buckets and serve them via Cloudfront. Deploy your application in Elastic Beanstalk and connect your application to the back-end database (Redshift) using JDBC."
        },
        {
            "Id": 7,
            "Name": "For AWS Auto Scaling, what is the first transition state an instance enters after leaving steady state when scaling in due to health check failure or decreased load?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Terminating", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Detaching", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Terminating:Wait", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "EnteringStandby", "IsAnswer": false }],
            "Explanation": "When Auto Scaling responds to a scale in event, it terminates one or more instances. These instances are detached from the Auto Scaling group and enter the Terminating state.",
            "Ref": "http://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/AutoScalingGroupLifecycle.html"
        }   ,
        {
            "Id": 8,
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
            "Id": 9,
            "Name": "You need to create a Route53 record automatically in CloudFormation when not running in production during all launches of a Template. How should you implement this?",
            "Tag": "ha",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Use a 'Parameter' for 'Environment', and add a 'Condition' on the Route53 'Resource' in the template to create the record only when 'environment' is not 'production'.", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Create two templates, one with the Route53 record value and one with a null value for the record. Use the one without it when deploying to production.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use a 'Parameter' for 'environment', and add a 'Condition' on the Route53 'Resource' in the template to create the record with a null string when 'environment' is 'production'.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Create two templates, one with the Route53 record and one without it. Use the one without it when deploying to production.", "IsAnswer": false }],
            "Explanation": "The best way to do this is with one template, and a Condition on the resource. Route53 does not allow null strings for records.",
            "Ref": "http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/conditions-section-structure.html"
        }
    ]
}