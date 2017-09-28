{
    "quiz": {
        "name": "Monitoring, Metrics, & Logging",
        "logo" : "assets/img/SNS.png",
        "time":"20 minutes"
    },
    "questions": [
        {
            "Id": 1,
            "Name": "Management has reported an increase in the monthly bill from Amazon web services, and they are extremely concerned with this increased cost. Management has asked you to determine the exact cause of this increase. After reviewing the billing report, you notice an increase in the data transfer cost. How can you provide management with a better insight into data transfer use?",
            "Tag": "mm&l, sec&gov",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Update your Amazon CloudWatch metrics to use five-second granularity, which will give better detailed metrics that can be combined with your billing data to pinpoint anomalies.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon CloudWatch Logs to run a map-reduce on your logs to determine high usage and data transfer.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Deliver custom metrics to Amazon CloudWatch per application that breaks down application data transfer into multiple, more specific data points.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using Amazon CloudWatch metrics, pull your Elastic Load Balancing outbound data transfer metrics monthly, and include them with your billing report to show which application is causing higher bandwidth usage.", "IsAnswer": false }],
            "Explanation": "Using Custom metrics is the best option here. You can publish your own metrics to CloudWatch using the AWS CLI or an API. You can view statistical graphs of your published metrics with the AWS Management Console. For more info on how to publish custom metrics and its advantages see the link.",
            "Ref": "http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html"
        } ,
        {
            "Id": 2,
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
        }    ,
        {
            "Id": 3,
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
            "Id": 4,
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
            "Id": 5,
            "Name": "Your Company wants to perform A/B testing on a new website feature for 20 percent of its users. The website uses CloudFront for whole site delivery, with some content cached for up to 24 hours. How do you enable this testing for the required proportion of users while minimizing performance impact?",
            "Tag": "mm&l",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Configure the web servers to handle two domain names. The feature is switched on or off depending on which domain name is used for a request. Configure a CloudFront origin for each domain name, and configure the CloudFront distribution to use one origin for 20 percent of users and the other origin for the other 80 percent.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure the CloudFront distribution to forward a cookie specific to this feature. For requests where the cookie is not set, the web servers set its value to 'on' for 20 percent of responses and 'off' for 80 percent. For requests where the cookie is set, the web servers use its value to determine whether the feature should be on or off for the response.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a second stack of web servers that host the website with the feature on. Using Amazon Route53, create two resource record sets with the same name: one with a weighting of '1' and a value of this new stack; the other a weighting of '4' and a value of the existing stack. Use the resource record set's name as the CloudFront distribution's origin.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Invalidate all of the CloudFront distribution's cache items that the feature affects. On future requests, the web servers create responses with the feature on for 20 percent of users, and off for 80 percent. The web servers set 'Cache-Control: no-cache' on all of these responses.", "IsAnswer": false }]
        }
     
     ]
}