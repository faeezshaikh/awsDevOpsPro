import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-whitepapers',
  templateUrl: 'whitepapers.html'
})
export class WhitepapersPage {

  whitepapers: Array<{ no: number, title: string, note: string,link:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.whitepapers = [
    {no:1,title:"Securing Data at Rest with Encryption",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/AWS_Securing_Data_at_Rest_with_Encryption.pdf"},
    {no:2,title:"Web Application Hosting in the AWS Cloud",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/aws-web-hosting-best-practices.pdf"},
    {no:3,title:"Migrating AWS Resources to a New Region",note:"sdfsdfsd",link:"http://d0.awsstatic.com/whitepapers/aws-migrate-resources-to-new-region.pdf"},
    {no:4,title:"Development and Test on Amazon Web Services",note:"sdfsdfsd",link:"http://media.amazonwebservices.com/AWS_Development_Test_Environments.pdf"},
    {no:5,title:"Microservices on AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/microservices-on-aws.pdf"},
    {no:6,title:"Blue/Green Deployments on AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/AWS_Blue_Green_Deployments.pdf"},
    {no:7,title:"Infrastructure as Code",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/DevOps/infrastructure-as-code.pdf"},
    {no:8,title:"Introduction to DevOps on AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/AWS_DevOps.pdf"},
    {no:9,title:"Practicing Continuous Integration and Continuous Delivery on AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/DevOps/practicing-continuous-integration-continuous-delivery-on-AWS.pdf"},
    {no:10,title:"Development and Test on AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/aws-development-test-environments.pdf"},
    {no:11,title:"Jenkins on AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/DevOps/Jenkins_on_AWS.pdf"},
    {no:12,title:"Storage Options in the AWS Cloud",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf"},
    {no:13,title:"Import Windows Server to Amazon EC2 with PowerShell",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/DevOps/import-windows-server-to-amazon-ec2.pdf"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhitepapersPage');
  }

openLink(e,link) {
    	window.open(link, '_system', 'location=yes');
			return false;
  }

}
