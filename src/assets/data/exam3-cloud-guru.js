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
        "Tag":"",
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
        "Tag":"",
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
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "16 - All instance in the stack except the instance being added.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "17 - the instance being added to the layer, the remaining instances in that layer, and all other instances in the stack.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1 - the instance being added to the layer.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "5 - the instance being added to the layer AND the remaining instances in that layer.", "IsAnswer": false }],
        "Explanation":"If an instance enters or leaves an online state - i.e like it does when being created/added to a stack the configure lifecycle event is run on ALL instance in the stack including itself."
    } 
    ,
    {
        "Id": 4,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
    ,
    {
        "Id": 3,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
    ,
    {
        "Id": 3,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
    ,
    {
        "Id": 3,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
    ,
    {
        "Id": 3,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
    ,
    {
        "Id": 3,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
    ,
    {
        "Id": 3,
        "Name": "", 
        "Tag":"",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation":""
    } 
 
    ]
}

