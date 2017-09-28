{
    "quiz": {
        "name": "Continuous Delivery and Process Automation ",
        "logo" : "assets/img/S3.png",
        "time":"20 minutes"
    },
    "questions": [
        {
            "Id": 1,
            "Name": "When an Auto Scaling group is running in Amazon Elastic Compute Cloud (EC2), your application rapidly scales up and down in response to load within a 10-minute window; however, after the load peaks, you begin to see problems in your configuration management system where previously terminated Amazon EC2 resources are still showing as active. What would be a reliable and efficient way to handle the cleanup of Amazon EC2 resources within your configuration management system? Choose 2 answers",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Write a script that is run by a daily cron job on an Amazon EC2 instance and that executes API Describe calls of the EC2 Auto Scaling group and removes terminated instances from the configuration management system.", "IsAnswer": true },
                { "Id": 1056, "QuestionId": 1010, "Name": "Configure an Amazon Simple Queue Service (SQS) queue for Auto Scaling actions that has a script that listens for new messages and removes terminated instances from the configuration management system.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Use your existing configuration management system to control the launching and bootstrapping of instances to reduce the number of moving parts in the automation.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Write a small script that is run during Amazon EC2 instance shutdown to de-register the resource from the configuration management system.", "IsAnswer": true },
                { "Id": 1059, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow Service (SWF) to maintain an Amazon DynamoDB database that contains a whitelist of instances that have been previously launched, and allow the Amazon SWF worker to remove information from the configuration management system.", "IsAnswer": false }]
        },
        {
            "Id": 2,
            "Name": "You are administering a continuous integration application that polls version control for changes and then launches new Amazon EC2 instances for a full suite of build tests. What should you do to ensure the lowest overall cost while being able to run as many tests in parallel as possible?",
            "Tag": "cd",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new Amazon EC2 instance for build test, unit and integration tests.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Perform syntax and build tests on the continuous integration system before launching the new Amazon EC2 instance unit and integration tests.", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Perform all tests on the continuous integration system, using AWS OpsWorks for unit, integration, and build tests.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Perform syntax checking on the continuous integration system before launching a new AWS Data Pipeline for coordinating the output of unit, integration, and build tests.", "IsAnswer": false }],
            "Explanation": "Use a CI server like Jenkins to build and test code before spinning new EC2 instances."
        },
        {
            "Id": 3,
            "Name": "Your application is currently running on Amazon EC2 instances behind a load balancer. Your management has decided to use a Blue/Green deployment strategy. How should you implement this for each deployment?",
            "Tag": "cd&pa",
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Set up Amazon Route 53 health checks to fail over from any Amazon EC2 instance that is currently being deployed to.", "IsAnswer": false },
                { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS CloudFormation, create a test stack for validating the code, and then deploy the code to each production Amazon EC2 instance.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Create a new load balancer with new Amazon EC2 instances, carry out the deployment, and then switch DNS over to the new load balancer using Amazon Route 53 after testing.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Launch more Amazon EC2 instances to ensure high availability, de-register each Amazon EC2 instance from the load balancer, upgrade it, and test it, and then register it again with the load balancer.", "IsAnswer": false }],
            "Explanation": "For Blue/Green deployment, you have to have another enovironment that mirrors the current one. Do DNS (Route 53) switch to divert traffic from one environment to the other. "
        }
   
     ]
}