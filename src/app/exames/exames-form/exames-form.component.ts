import { Component, OnInit } from '@angular/core';
import { Exame } from "app/exames/shared/exame";
import { ExameService } from "app/exames/shared/exame.service";

@Component({
  selector: 'nm-exames-form',
  templateUrl: './exames-form.component.html'
})
export class ExamesFormComponent implements OnInit {

  exame: Exame = new Exame();
  
  constructor(private exameSvc: ExameService) { }

  ngOnInit() {
  }
  
  


  createExame(){

    if (this.exame.ccBuckBaixo){
       this.exame.ccBuckBaixo = 'S'
    }else{
       this.exame.ccBuckBaixo = 'N'
    } 
    
    if (this.exame.ccDP){
      this.exame.ccDP ='S'
    }else{
      this.exame.ccDP = 'N'
    }

    if (this.exame.ccMPeit){
      this.exame.ccMPeit ='S'
    }else{
       this.exame.ccMPeit = 'N'
    }

    if (this.exame.ccMPerf){
      this.exame.ccMPerf ='S'
    }else{
       this.exame.ccMPerf = 'N'
    }

   if (this.exame.ccPL){
      this.exame.ccPL ='S'
    }else{
       this.exame.ccPL = 'N'
    }
  
  if (this.exame.ccPM){
      this.exame.ccPM ='S'
    }else{
       this.exame.ccPM = 'N'
    }

  if (this.exame.ccSimetria){
      this.exame.ccSimetria ='S'
    }else{
       this.exame.ccSimetria = 'N'
    }

  if (this.exame.mloAI){
      this.exame.mloAI ='S'
    }else{
       this.exame.mloAI = 'N'
    }

  if (this.exame.mloDP){
      this.exame.mloDP ='S'
    }else{
       this.exame.mloDP = 'N'
    }
  
  if (this.exame.mloDPA){
      this.exame.mloDPA ='S'
    }else{
       this.exame.mloDPA = 'N'
    }

  if (this.exame.mloMP){
      this.exame.mloMP ='S'
    }else{
       this.exame.mloMP = 'N'
    }

  if (this.exame.mloMPAM){
      this.exame.mloMPAM ='S'
    }else{
       this.exame.mloMPAM = 'N'
    }

  if (this.exame.mloMPerf){
      this.exame.mloMPerf ='S'
    }else{
       this.exame.mloMPerf = 'N'
    }      

  if (this.exame.mloPC){
      this.exame.mloPC ='S'
    }else{
       this.exame.mloPC = 'N'
    }      

if (this.exame.mloPM){
      this.exame.mloPM ='S'
    }else{
       this.exame.mloPM = 'N'
    }      
if (this.exame.mloSimetria){
      this.exame.mloSimetria ='S'
    }else{
       this.exame.mloSimetria = 'N'
    }      
if (this.exame.mloTT){
      this.exame.mloTT ='S'
    }else{
       this.exame.mloTT = 'N'
    }      
if (this.exame.eart){
      this.exame.eart ='S'
    }else{
       this.exame.eart = 'N'
    }      
if (this.exame.econt){
      this.exame.econt ='S'
    }else{
       this.exame.econt = 'N'
    }      
if (this.exame.edef){
      this.exame.edef ='S'
    }else{
       this.exame.edef = 'N'
    }      
if (this.exame.eod){
      this.exame.eod ='S'
    }else{
       this.exame.eod = 'N'
    }      
if (this.exame.eruido){
      this.exame.eruido ='S'
    }else{
       this.exame.eruido = 'N'
    }      


    this.exameSvc.createExame(this.exame)
    this.exame = new Exame()
  

  }

}
