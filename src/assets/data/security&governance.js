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
        "Name": "", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""

    },
    {
        "Id": 3,
        "Name": "", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""

    },
    {
        "Id": 4,
        "Name": "", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""

    },
    {
        "Id": 5,
        "Name": "", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""

    },
    {
        "Id": 6,
        "Name": "", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""

    },
    {
        "Id": 7,
        "Name": "", 
        "Tag":"ha",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "", "IsAnswer": true }],
            "Explanation":"",
            "Ref":""

    }
     ]
}