import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-whitepapers',
  templateUrl: 'whitepapers.html'
})
export class WhitepapersPage {

  whitepapers: Array<{ no: number, title: string, note: string,link:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.whitepapers = [{no:1,title:"Security at Scale: Governance in AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/compliance/AWS_Security_at_Scale_Governance_in_AWS_Whitepaper.pdf"},
    {no:2,title:"Security at Scale: Logging in AWS",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/compliance/AWS_Security_at_Scale_Logging_in_AWS_Whitepaper.pdf"},
    {no:3,title:"Securing Data at Rest with Encryption",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/AWS_Securing_Data_at_Rest_with_Encryption.pdf"},
    {no:4,title:"Development and Test on Amazon Web Services",note:"sdfsdfsd",link:"http://media.amazonwebservices.com/AWS_Development_Test_Environments.pdf"},
    {no:5,title:"Operational Checklists for AWS",note:"sdfsdfsd",link:"http://media.amazonwebservices.com/AWS_Operational_Checklists.pdf"},
    {no:6,title:"Architecting for the Cloud: Best Practices",note:"sdfsdfsd",link:"https://media.amazonwebservices.com/AWS_Cloud_Best_Practices.pdf"},
    {no:7,title:"Building Fault-Tolerant Applications on AWS",note:"sdfsdfsd",link:"http://media.amazonwebservices.com/AWS_Building_Fault_Tolerant_Applications.pdf"},
    {no:8,title:"Storage Options in the AWS Cloud",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/Storage/AWS%20Storage%20Services%20Whitepaper-v9.pdf"},
    {no:9,title:"Backup and Recovery Approaches Using Amazon Web Services",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/Backup_and_Recovery_Approaches_Using_AWS.pdf"},
    {no:10,title:"AWS Security Best Practices",note:"sdfsdfsd",link:"https://d0.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf"}];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhitepapersPage');
  }

openLink(e,link) {
    	window.open(link, '_system', 'location=yes');
			return false;
  }

}
