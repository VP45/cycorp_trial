"use client";

import { RxCross2 } from "react-icons/rx";
import YouPNG from "../../public/you.jpg";
import YMSCL from "../../public/ymsLogo.png";
import BNSA from "../../public/image1.jpeg";
import YMSCLPICKER from "../../public/yms_picker.png";
import BNAPICKER from "../../public/bnsa_picker.png";
import Select from "react-select";

import {
  useJsApiLoader,
  GoogleMap,
  InfoBox,
  MarkerF,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Option from "./Option";
import { StaticImageData } from "next/image";

const data2 = [
  {
    desc: "REDEVELOPMENT OF RESIDENTIAL TOWER AT WALKESHWAR- QUEENS BOULEVARD  UNDER 33(6)",
    area: " 62,000 ",
    client: "M/S LAKHSACHANDI COLUMBIA DEVELOPERS",
    lat: 18.95421377727507,
    lng: 72.80700946941955,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "DESIGN OF SALE BUILDING ON SRA SCHEME - FOR MAHALAXMI CO- HOUSING SOCIETY -45 STOREY TOWER WITH 8 STOREY PARKING  \" Victoria  \"",
    area: " 3,00,000 ",
    client: "M/S FAITHFULL DEVELOPERS SUBSIDARY OF M/S ANCHOR GROUP",
    lat: 19.007678983593067,
    lng: 72.82362565629666,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF RESIDENTIAL TOWER BRIJWASI, PLOT NO 103, AT  MATUNGA-MUMBAI UNDER 33(7)",
    area: " 35,000 ",
    client: "M/S SAHAJANAND DEVELOPERS",
    lat: 19.03067233397277,
    lng: 72.85306019456506,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF RESIDENTIAL TOWER STILIT +15 UPPER  M/S PRIME HOUSING, PLOT NO 102, AT  MATUNGA-MUMBAI UNDER 33(7)",
    area: " 24,000 ",
    client: "M/S PRIME HOUSING",
    lat: 19.030456506184077,
    lng: 72.85343831362839,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF RESIDENTIAL TOWER STILIT + 13  M/S PRIME HOUSING, PLOT NO 131,  AT  MATUNGA \" VERSATILE HEIGHTS \" -MUMBAI UNDER 33(7) ",
    area: " 40,000 ",
    client: "M/S VERSATILE DEVELOPERS PVT LTD",
    lat: 19.031969526197912,
    lng: 72.85405293107033,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELPOMENT OF RESIDENTIAL TOWER GR +17 -FOR PLOT 595C-RATAN MANSION, DR B A ROAD , MATUNGA -MUMBAI \" MITTAL GARDENIA \"  -UNDER 33(7)",
    area: " 42,000 ",
    client: "M/S MITTAL BUILDERS",
    lat: 19.0235091847074,
    lng: 72.85284276254819,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELPOMENT OF RESIDENTIAL TOWER GR +17 -FOR PLOT 595A-, DR B A ROAD , MATUNGA -MUMBAI -UNDER 33(7)",
    area: " 54,000 ",
    client: "M/S MITTAL BUILDERS",
    lat: 19.0235091847074,
    lng: 72.85284276254819,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELPOMENT OF RESIDENTIAL TOWER 7 -FOR PLOT 77, BHAUDAJI ROAD -, MATUNGA -MUMBAI -UNDER W33(7)",
    area: " 52,000 ",
    client: "M/S JAYJEET DEVELOPERS",
    lat: 19.032221866973664,
    lng: 72.85449020426842,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELPOMENT OF RESIDENTIAL TOWER for Building Known as Shivji Krupa, plot no 544 CS no 747/10 DME, Matunga, Mumbai",
    area: " 71,541 ",
    client: "M/s Jess Constructin - Bharat thakker ",
    lat: 19.024658231330733,
    lng: 72.8544795997276,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELPOMENT OF RESIDENTIAL TOWER  -FOR PLOT 128-, SUPARI BAUG PAREL DIVISION  -MUMBAI -UNDER 33(7)",
    area: " 40,000 ",
    client: "M/S ADITDEV DEVELOPERS  LLP",
    lat: 18.99814382638856,
    lng: 72.83717533689443,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF PLOT 627- DADAR PARSEE COLONY- 20 STOREY TOWER ",
    area: " 60,000 ",
    client: "M/S ANCHOR GROUP",
    lat: 19.01875539561916,
    lng: 72.8522708555805,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF  OF D-66 AZAD NAGAR AT ANDHERI UNDER 33(5) ",
    area: " 35,000 ",
    client: "M/S BRAMHA DEVELOPERS",
    lat: 19.12693917117916,
    lng: 72.83739380426755,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) OF PLOT  744- MATUNGA ",
    area: " 26,683 ",
    client: "MR SUNIL CHHEDA AND ANCHOR REALITY ",
    lat: 19.027465353992316,
    lng: 72.85581748589277,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7)  OF WADI MANSION , DADAR ",
    area: " 38,562 ",
    client: "REX REALITY ",
    lat: 19.026430837342513,
    lng: 72.85516302709068,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) OF PLOT 53 , MATUNGA ",
    area: " 28,157 ",
    client: "M/S VASANT REALTORS ",
    lat: 19.031039171839684,
    lng: 72.85583815577223,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) OF PLOT 132 , MATUNGA ",
    area: " 32,645 ",
    client: "M/S VERSATILE REALITY ",
    lat: 19.027013589627657,
    lng: 72.85275572795703,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF PANDARINATH CHAWL AND ANU  NIKETAN , MUGHBHAT LANE  -65 TENANTS ",
    area: " 56,158 ",
    client: "M/S NANDIVARDHAN DEVELOPERS ",
    lat: 18.953334038148242,
    lng: 72.82309647726693,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF DEEN BUILDING ON NM JOSHI  MARG PAREL -220TENANTS ",
    area: " 2,40,000 ",
    client: "M/S HARE KRISHNA DEVELOEPRS ",
    lat: 18.99069466435448,
    lng: 72.83207497979842,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "PROPOSED RESIDENTIAL TOWER AT CHUNBHATTI - 48TENANTS ",
    area: " 1,28,000 ",
    client: "MR YOGENDRA P DOSHI ",
    lat: 19.051772530744127,
    lng: 72.86912628346163,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "FOR REDEVELOPMENT UNDER 33(7)  for Building Known as vipin villa, plot no 583 CS no 703/10 DME, Matunga, Mumbai",
    area: " 59,575 ",
    client: "M/s Jess Constructin - Bharat thakker ",
    lat: 19.02182599895312,
    lng: 72.85240179641025,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "PROPOSED RESIDENTIAL DEVELOPMENT AT DADAT- 40/26 -ANCHOR GROUP ",
    area: " 16,500 ",
    client: "M/S ANCHOR GROUP",
    lat: 19.018464896405085,
    lng: 72.84455777803271,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "PROPOSED RESIDENTIAL DEVELOPMENT 33(7) , MUNICIPAL LAND AT SHANTI VILLA LATIF VILLA CS NO 65  DADAR ",
    area: " 3,30,000 ",
    client: "M/S ANCHOR GROUP",
    lat: 19.011847223324825,
    lng: 72.84392978660593,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "PROPOSED DEVELOPMENT FOR PLOT AT WADALA, KATRAK ROAD FOR TMGL GROUP",
    area: " 3,00,000 ",
    client: "TMGL GROUP",
    lat: 19.010770855440008,
    lng: 72.84859674499899,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "PROPOSED REDEVELOPMENT UNDER 33(7) AT BABULNATH - PREMAL BHAI ",
    area: " 2,00,000 ",
    client: "MR PREMAL SHROFF",
    lat: 18.958996984640752,
    lng: 72.80851275922613,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF ROSHAN EKTA CO-OPERATIVE HOUSING SOCIETY LIMITED (PROPOSED). AT BYCULLA ",
    area: " 2,25,000 ",
    client: "M/S BEACON REALITY MR RAIS SHEIKH -SP",
    lat: 18.976736405011106,
    lng: 72.83252970046883,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF SHIVJI KRUPA , MATUNGA ",
    area: " 6,50,000 ",
    client: "M/s Jess Constructin - Bharat thakker ",
    lat: 19.025846376782386,
    lng: 72.8544366926821,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "PROPSOED DEVELOPMENT AT SHIVJI PARK- DIPTI GROUP ",
    area: " 45,000 ",
    client: "DIPTI GROUP ",
    lat: 19.02739867342153,
    lng: 72.83819661369093,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Proposed redevelopment - & huges road ",
    area: " 2,00,000 ",
    client: "M/s Radius Group",
    lat: 18.959479690437437,
    lng: 72.80981408106919,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7)  of Dormitory building no 5 , part of CS no1 /1506, Fort Division, Mumbai ",
    area: " 2,48,000 ",
    client: "M/S BEACON REALITY MR RAIS SHEIKH -SP",
    lat: 18.935265764925216,
    lng: 72.83177727013268,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF PROJECT AT DADR BEARING CS NO  46/26 AMD 45/26 DADAR ",
    area: " 50,000 ",
    client: "M/S PARANJAPE SCHEMES",
    lat: 19.019027843670788,
    lng: 72.84390443295128,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF BHARUCHA PROPERT AT TARDEO ",
    area: " 35,000 ",
    client: "M/S NANDIVARDHAN DEVELOPERS ",
    lat: 18.974838645143137,
    lng: 72.8134437058786,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF READY MONEY BUILDING AT TARDEO",
    area: " 33,000 ",
    client: "M/S NANDIVARDHAN DEVELOPERS ",
    lat: 18.97228691925601,
    lng: 72.81574726520165,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT DIVA NIKETAN, B.A. ROAD , MATUNGA ",
    area: " 55,000 ",
    client: "M/S TEJUKAYA GROUP ",
    lat: 19.03247404374947,
    lng: 72.84050396224032,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) ATPlot 700, Prasad Building ,Parsi Colony Matunga",
    area: " 45,000 ",
    client: "M/s Rishiraj Builders LLP ",
    lat: 19.017647993066607,
    lng: 72.85223757922485,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT PLOT 747, Matunga ",
    area: " 49,000 ",
    client: "M/s Pankaj Shah ",
    lat: 19.022810517727795,
    lng: 72.85827786234968,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT Bhasin Villa , Matuna ",
    area: " 40,000 ",
    client: "M/s Harsh Neminath Jain ",
    lat: 19.01336186526243,
    lng: 72.85459583874,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Development ,Extension of Gujrati Club ,Matunga ",
    area: " 18,000 ",
    client: "M/s Gujrati Club - Champak bhai  Gangar and others ",
    lat: 19.027540879102393,
    lng: 72.85704749825582,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Development , Addition /Alternation of Matunga Gymkhana ",
    area: " NA ",
    client: "M/s Matunga Gymkhana ",
    lat: 19.03174998299814,
    lng: 72.85567420723481,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7)for SONAR CHAWL , Wadala ",
    area: " 45,000 ",
    client: "M/S B.P.GANGAR COSNTRUCTION PVT LTD ",
    lat: 19.187685466842485,
    lng: 72.86511975408304,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT 511, DME, MATUNGA ",
    area: " 55,000 ",
    client: "M/S RAJIV MEHTA ",
    lat: 19.03020267304379,
    lng: 72.85498377561728,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT TRAMBAK BHAVAN ,MATUNGA ",
    area: " 53,000 ",
    client: "M/S VASANT CHHEDA",
    lat: 19.06003545142952,
    lng: 72.83089608612316,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT Razak haven , Darabsha road , Mumbai",
    area: " 65,000 ",
    client: "M/s JK Speciality -Residence for jatia Family ",
    lat: 18.964788336823407,
    lng: 72.80362945223428,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT jitendra building - Matunga ",
    area: " 52,000 ",
    client: "M/s Prashant Vaidya - jitendra building ",
    lat: 19.02266996106188,
    lng: 72.85314317997992,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT UNDER 33(7) AT jariwala Building - Marine drive ",
    area: " 35,000 ",
    client: "M/s Naman Group - jariwala Building - Marine drive ",
    lat: 18.95804089782391,
    lng: 72.82587152524444,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevlopment of plot no 175 , wadala Estate, Matunga",
    area: " 30,000 ",
    client: "Aura Creators ",
    lat: 19.027726243346773,
    lng: 72.85567287441643,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of CRD matunga ",
    area: " 3,00,000 ",
    client: "M/s Happy Homes ",
    lat: 19.029483964984212,
    lng: 72.8467729972067,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Moreshwar Building Matunga",
    area: " 61,000 ",
    client: "M/s Happy Homes ",
    lat: 19.027790192031233,
    lng: 72.85134348107017,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Kasturba Building , Matunga",
    area: " 35,000 ",
    client: "M/s Happy Homes ",
    lat: 18.97768685874578,
    lng: 72.80779228291469,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Chandramji building , Matugna ",
    area: " 65,000 ",
    client: "M/s Rajesh Jain and others ",
    lat: 19.03153568450763,
    lng: 72.85372153874036,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Katgara house peddar road ",
    area: " 60,000 ",
    client: "M/s Katgara family and others ",
    lat: 18.963904159115067,
    lng: 72.80328368291457,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of plot no 107 , Atharva, Hindu Colony , Mautnga",
    area: " 25,000 ",
    client: "M/s Ashwa Reality ( India ) Pvt Ltd  ",
    lat: 19.020167399226086,
    lng: 72.84751992524531,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Rajamahal , Shivaji park, Mumbai ",
    area: " 55,000 ",
    client: "M/s Dipti Group ",
    lat: 19.02930363281236,
    lng: 72.84008698291557,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Rita Villa , andheri (east ) ",
    area: " 45,000 ",
    client: "M/s Dipti Group ",
    lat: 19.121636835298453,
    lng: 72.88603515408197,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelpoment of Kotak Kunj , Mumbai ",
    area: " NA ",
    client: " M/s Naman Group ",
    lat: 18.960863254856342,
    lng: 72.80918412718674,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Kesar buag , Dadar 33(9) ",
    area: " 2,00,000 ",
    client: "M/s Nandivardhan Group ",
    lat: 19.021070365973966,
    lng: 72.84762765936823,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of property U/s 33/7 for plot no 211B, Bearing CS no 192B/10, Dadar Matunga Estate , Matunga, Mumbai ",
    area: " 50,000 ",
    client: " M/s Suni Saiya",
    lat: 19.024283496101216,
    lng: 72.85232138291543,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF  BIT chawl , Bombay Central ",
    area: " 32,00,000 ",
    client: "M/S  Finetone realtors PVT Ltd ",
    lat: 18.974766370049515,
    lng: 72.82296014058478,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Proposed redevelopment of Raj Kamal - Shivaji Park ",
    area: " 55,000 ",
    client: "M/s Dipti Group ",
    lat: 19.029588261107776,
    lng: 72.84105517319067,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Prachi building Shivaji Park ",
    area: " 45,000 ",
    client: "M/s Dipti Group ",
    lat: 19.028897692824327,
    lng: 72.83963349456515,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Proposed redevelopment of plot no 211 B matunga ",
    area: " 60,000 ",
    client: "M/s Sunil Saiya ",
    lat: 19.024240553304747,
    lng: 72.85169572524532,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Parvati niwas matunga ",
    area: " 30,000 ",
    client: "M/s Shwesh Realty/ Mr. Dalpat Jain ",
    lat: 19.031077500369324,
    lng: 72.85567879641046,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Rohit Villa Matunga ",
    area: " 35,000 ",
    client: "M/s Shobhaniye developers ",
    lat: 19.02752866292362,
    lng: 72.85812499641031,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Pathare building , Huges road ",
    area: " NA ",
    client: "M/s Radius Group ",
    lat: 18.9595757371452,
    lng: 72.81308905407938,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment o f Park view , Matunga ",
    area: " NA ",
    client: "M/sSahej Group ",
    lat: 18.95623711246866,
    lng: 72.80195247228872,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Bhalchandra Bhavan ",
    area: " NA ",
    client: "M/s Mayank Gogri ",
    lat: 18.993693629149412,
    lng: 72.84630170540515,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Development of  plot at Kurla Chembur for TDR ",
    area: " NA ",
    client: "M/s Lallu bhai Amichand ",
    lat: 19.072638675910714,
    lng: 72.88455318029695,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevleopment of plot bearing CTS 590, KHAr ",
    area: " NA ",
    client: "Mahir Saigara on behalf of  Inderji Mohanlal Bhatia ",
    lat: 19.074424732663818,
    lng: 72.82806900611719,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Champak building - Shivaji park ",
    area: " 50,000 ",
    client: "M/s Kavit Chheda ",
    lat: 19.025869508004455,
    lng: 72.83680069641035,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Krishna Kunj Matunga ",
    area: " NA ",
    client: "M/s Suvidha Group ",
    lat: 19.02403928210387,
    lng: 72.85452006942053,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelpoment of Emgee greens , wadala ",
    area: " NA ",
    client: "M/s Gupta housing ",
    lat: 19.01492228062886,
    lng: 72.86199953874022,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of property at C.S. No. 691/10, 698/10 & 699/10 of Matunga Division, Plot no. 596, 597 & 598 of Dadar Matunga Estate, situated at Dr. B.A. Road, Dadar (E), Mumbai- 400014 Known as \u201cAgarwal Nagar\u201d",
    area: " 5,03,200 ",
    client: "Eskays land developers Pvt. Ltd.",
    lat: 19.027482820237857,
    lng: 72.85541538237541,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment u/s 33(7) of plot bearing C.S. No.710B/10, Plot no. 575B, Savla Niwas",
    area: " 39,100 ",
    client: "Shri. Devendra Kothari and others",
    lat: 19.01901557272014,
    lng: 72.84039146942064,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of property U/s DCPR. 33(7) on C.S.N0. 592 of Matunga Division, known as \u201cDEWAN VILLA\u201d.",
    area: " 40,700 ",
    client: "M/s. Samarth Life Sciences Pvt. Ltd.",
    lat: 19.0316264407937,
    lng: 72.85441522816878,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment under Regn. 33(7) of DCPR 2034of building on plot bearing C.S. no.1/380 of Colaba division,  known as Grants building.",
    area: " 4,91,500 ",
    client: "M/S VIJAY TRADING COMPANY",
    lat: 18.918696421229054,
    lng: 72.83017032708901,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "redevelopment of property bearing C.S. No. 734/10, of Matunga Division, Known as \"Jehangir Mansion\".",
    area: " 46,500 ",
    client: "M/s. Tridhaatu Jehangir Mansion Developers LLP.",
    lat: 19.024247910381273,
    lng: 72.85588591175052,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Proposed Dharmshala with ancillary user  C.S. No. 563 and 1/564, of Matunga Division Jain Tempel",
    area: " 48,000 ",
    client: "Shree Matunga Jain Swetamber Murtipujak Tapgachha Sangh & Charities",
    lat: 19.025140441768237,
    lng: 72.85220592119559,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "redevelopment of building on plot bearing C.S. No. 1097 & 1/1097 of Girgaum Division",
    area: " 1,84,900 ",
    client: "M/s. Manav Builders Pvt. Ltd",
    lat: 18.95759846085784,
    lng: 72.81984501022393,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Proposed redevelopment of Municipal acquired property on plot bearing C.C. No. 1521(part), situated at Imamwada Road, B.I.T. chawl, Mandvi Division, B-ward",
    area: " 20,53,400 ",
    client: "M/s M.K. Enterprises",
    lat: 18.9594177969014,
    lng: 72.83315093873921,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "redevelopment on plot bearing C.S. no. 108/1721 & 107/1721 of Mandvi Division.",
    area: " 42,600 ",
    client: "M/S M.K.INDIA Enterprises.",
    lat: 18.95652809557651,
    lng: 72.83659061982405,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of property bearing C. S. Nos. 309, 1/309 & 2/309 of Tardeo Division, Shreepati Skie 33(9)",
    area: " 12,00,000 ",
    client: "M/s. Shreepati Skies (AOP).",
    lat: 18.966089624327918,
    lng: 72.81418928517549,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment under DCPR 33(9) for the properties bearing C.S. Nos. 60, 1/61, 2/61, 1B1/62, 3/1(Zatka Mutton), 1(Part) Municipal Garage, 1 (Part) 144 Tenements Building & 1 (Part) Slum over Drain Box, 1(Part) Ambedkar Sadan & 1 (Part) Ambedkar Sadan Slum of Parel Division, N. M. Joshi Marg, Mumbai known as \u201cShreepati Estate.\u201d",
    area: " 48,54,300 ",
    client: "M/s. Shreepati Build infra Investment Ltd.",
    lat: 19.008020076290116,
    lng: 72.8360658943222,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Property bearing Plot no. 460 & 459 having C.S. No. 373/10 & 374/10 of Dadar-Matunga, known as \u201cVenkatesh Niwas & Vishnu Sadan\u201d",
    area: " 1,74,500 ",
    client: "M/s. Shanti Siddhi Infra LLP.",
    lat: 19.028039430285098,
    lng: 72.85542146639406,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of Property bearing C.S.No.1009, 1010, 1011, 1012, 1014(pt), 1015(pt), 2105 of Byculla division in E ward, Mumbai",
    area: " 2,04,100 ",
    client: "M/s. WHITE FLOWER REALTY LLP.",
    lat: 18.973608176383877,
    lng: 72.8319615253476,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: " Bearing C.S. No. 3A/632 ( ALTAMOUNT)",
    area: " 81,500 ",
    client: "M/s. Livstone Estates LLP.",
    lat: 18.967584670144785,
    lng: 72.80963131102149,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment u/s 33(7) & 33(12) of Plot bearing C.S. No.189B/10 & 189D/10 of Matunga Division, Plot No. 210/C & 210/E of Dadar Matunga",
    area: " 2,06,200 ",
    client: "M/s Neetnav Constructions",
    lat: 19.036557644033046,
    lng: 72.86138173128302,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "d redevelopment on property bearing C.S. No. 150/74 known as\r\n\u201cKhoja Kasam\u201d & C.S. No. 153/74 (Gope House)",
    area: " 2,54,500 ",
    client: "M/s Hi-Rock Construction Pvt Ltd ",
    lat: 19.00319649021176,
    lng: 72.84104707841793,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment u/s 33(7) on C.S. No. 103/74 known\r\nas \"Purandare Sadan\", of Parel-Sewri",
    area: " 90,500 ",
    client: "M/S HI-ROCK CONSTRUCTION PVT.LTD. ",
    lat: 19.00130056741392,
    lng: 72.83840004419966,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "redevelopment of the Municipal plot bearing C.S. No.: 1840 (Pt), Byculla Div (ZAM ZAM)",
    area: " 4,09,300 ",
    client: "M/S HI-ROCK CONSTRUCTION PVT.LTD. ",
    lat: 18.955173683714985,
    lng: 72.83323258778529,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment Scheme for the properties bearing C. S. Nos.976, 978, 978/1 to\r\n14,979,979/1 to 8, 981, 981/1 to 20, 982(Pt), 986, 986/1 to\r\n26,987,987/1 to 52, 989, 989/1 to 37,1155,1155/1,1156,\r\n1157,1157/1 to 3,1158,1158/2 to 4,1159,1159/1,1162 A &\r\nC of Village Vile Parle.",
    area: " 18,00,000 ",
    client: "Shreepati Rise Estate LLP",
    lat: 19.098443721807072,
    lng: 72.84752199985317,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "REDEVELOPMENT OF PROPERTY BEARING C.S.NO. 1D-6/392 OF\r\nMALBAR CUMBALLA HILL DIVN,",
    area: " 61,000 ",
    client: "Mr. Jaikumar S. Loyalka",
    lat: 18.97463140901433,
    lng: 72.80666007073262,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "redevelopment of Property bearing C.S.NO.426/10 of\r\nMatunga Divn, Plot No. 85, Scheme No. 6, V.A.Ozha Marg, Matunga,(JAYDEEP BHAI-KALPANA BLDG)",
    area: " 41,000 ",
    client: "M/s Mehta Enterprises.",
    lat: 19.030884878880727,
    lng: 72.85586380124555,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Re-development of property bearing C.S. No. 1459 ,1460\r\n& 1458 of Byculla Division,Known as \u2018DevjiDharsi\u2019, \u2018Zohra Mansion\u2019 &\r\nTambawala building",
    area: " 2,89,000 ",
    client: "M/s. Lakadawala Developers Pvt. Ltd.",
    lat: 18.964238097104197,
    lng: 72.82908107066699,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Redevelopment of building known as Shree\r\nJagat Prakash CHSL on land bearing C.S. No. 651,\r\nplot No. 93",
    area: " 68,000 ",
    client: "Shree Jagat Prakash CHSL",
    lat: 19.02083472522222,
    lng: 72.85979062893587,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "MITTAL COMMERCIA - COMMERCIAL OFFICE PROJECT",
    area: " 1,50,000.00 ",
    client: "M/S MITTAL BUILDERS",
    lat: 19.104788143790113,
    lng: 72.88046902534974,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "OFFICE EXTENSION AT ANDHERI EAST - PANASONIC OFFICE ",
    area: " 15,000 ",
    client: "M/S ANCHOR GROUP",
    lat: 19.11402414705384,
    lng: 72.84701049290952,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "FSI + TDR - case -andheri -Jeena HouseCorporate office complex ",
    area: " 1,00,000 ",
    client: "Jeena house , - Commercial center , Andheri ",
    lat: 19.10566516998545,
    lng: 72.86669149555038,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "AEGIS LOGISTCS LTS -  ADDITIONAL TANKS T150 T T166 AND ANCILLARY STRUCTURES TERMNIAL FOR  TRANSIT STORAGE OF CHEMICAL ",
    area: " NA ",
    client: "M/S AEGIS LOGISTICS LTD",
    lat: 19.003358637259495,
    lng: 72.89431810469156,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "SEALORD CONTAINERS LTD - TERMNIAL FOR  TRANSIT STORAGE OF CHEMICAL ",
    area: " 3,00,000 ",
    client: "M/S AEGIS LOGISTICS LTD",
    lat: 19.012679026639216,
    lng: 72.8893771547923,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "EXTENSION AND NEW Wing D OF SCHOOL BUILDING FOR M/S SHISHUVAN SCHOOL AT MATUNGA",
    area: " 95,000 ",
    client: "M/S HIRJI BHIJRAJ TRUST",
    lat: 19.02985290026225,
    lng: 72.8563993302501,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "Addition& Alteration for property bearing C.S.No.1675 & 1671 of Mandvi Div, Shree C.V.O.D. Jain Pathshala or Orchid International School, Plot no. 84",
    area: " 11,241 ",
    client: "Shree Pannala Khimji Chheda (Chairman of trust Shree C.V.O.D. Jain Pathshala Trust.)",
    lat: 18.956520750529606,
    lng: 72.83663384297952,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "EMERALS ISLE - BUNGALOW  SCHEME AT PAWNA - NEAR LONAVALA",
    area: " 73 ACRES ",
    client: "M/S VERSATILE DEVELOPERS PVT LTD",
    lat: 18.647605558718656,
    lng: 73.50345729491599,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "BUNGLOW FOR MRS ANITA GARWARE AT LONAVALA",
    area: " 5,000 ",
    client: "MRS ANITA GARWARE",
    lat: 18.750806341347737,
    lng: 73.42550592322742,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "30 CAR MULTI STACK PARKING FOR MITTAL TOWER  OPENSPACE AT NARIMAN POINT",
    area: " NA ",
    client: "M/S MITTAL BUILDERS",
    lat: 18.925694002649887,
    lng: 72.82499466529711,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "TODI & CO- FA\u00c7ADE DESIGN AND APPROVAL FOR ZENZI PUB IN PAREL , MUMBAI",
    area: " 32,000 ",
    client: "M/S TODI & CO",
    lat: 18.999395752837167,
    lng: 72.83044481995442,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "SHOPPING CENTER  AT DADAR FOR MR JITUBHAI SHAH- SHREENATH & CO.",
    area: " 8,000 ",
    client: "M/S SHREENATH & CO",
    lat: 19.02307550687057,
    lng: 72.8419931720838,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "MIRCOBREWERY FOR SEVEN BEER ISLAND AT TODI & Co ",
    area: " 3,500 ",
    client: "M/S SEVENISLAND BEER",
    lat: 18.999395752837167,
    lng: 72.83044481995442,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "RESTAURANT - ON FIRST FLOOR TODI AND CO ",
    area: " 2,000 ",
    client: "MR GAURAV TODI ",
    lat: 18.999395752837167,
    lng: 72.83044481995442,
    company: "BNSA+SC",
    img: BNSA
  },
  {
    desc: "AJMERA RESIDENCE AT MATUNGA",
    area: " 2,000 ",
    client: "MR HARESH AJMERA",
    lat: 19.027146513431394,
    lng: 72.85603210325368,
    company: "BNSA+SC",
    img: BNSA
  },
  {
      desc: "Surya Nursing Home at Santacruz West",
      area: "20450",
      client: "Nursing Home",
      lat: 19.112022184636682,
      lng: 72.843518899278,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Sapphire Co-Operative Society Ltd at Santacruz West",
      area: "51667",
      client: "Sapphire Residency LLP",
      lat: 19.140241904510088,
      lng: 72.84356181244874,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Aman Society at Goregaon West",
      area: "28202",
      client: "Patel Developers",
      lat: 19.163246374338247,
      lng: 72.86015714374922,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Aspen Garden at Goregaon East",
      area: "300452",
      client: "Amal Group",
      lat: 19.155240851698093,
      lng: 72.85146260777312,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Aspen Park at Goregaon East",
      area: "2620122",
      client: "Amal Group",
      lat: 19.155984942749168,
      lng: 72.8519134810722,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Shanti Villa at Juhu",
      area: "36511",
      client: "Ram Khatri",
      lat: 19.115163325972723,
      lng: 72.82263156757668,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Garde Niwas at Santacruz East",
      area: "32572",
      client: "Sanjay Thatte",
      lat: 19.081847336346375,
      lng: 72.84095049014505,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Integrated Kamal at Nahaur",
      area: "46695",
      client: "Integrated Spaces",
      lat: 19.160974981877622,
      lng: 72.94803354765655,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Raj Tower at Marol",
      area: "27771",
      client: "Sarover Homes",
      lat: 19.14292271791005,
      lng: 72.85742113371957,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Salmona Villa at Santacruz West",
      area: "49514",
      client: "Calvin Properties",
      lat: 19.081809456767676,
      lng: 72.84160696255395,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Pranay Shakti at Andheri West",
      area: "89989",
      client: "Integrated Spaces",
      lat: 19.139444166204612,
      lng: 72.8377826594765,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Crescent Solitare at Kurla West",
      area: "205356",
      client: "Crescent Group",
      lat: 19.102687655702248,
      lng: 72.88257973918812,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Shree Ram at Mulund East",
      area: "39673",
      client: "Rachna Group",
      lat: 19.17042381617094,
      lng: 72.95774579284239,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Sai Everest at Santacruz East",
      area: "25067",
      client: "Sai Everest Builders & Developers",
      lat: 19.080447464387568,
      lng: 72.84935398107102,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Nataraj Society at Bandra West",
      area: "32830",
      client: "S. Raheja Realty",
      lat: 19.052587360995815,
      lng: 72.83908720699839,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Stella at Goregaon West",
      area: "193644",
      client: "Chandak Group",
      lat: 19.163867568674032,
      lng: 72.84560225012525,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Amubhai D. Shah at Santacruz West",
      area: "172224",
      client: "Amubhai D.Shah",
      lat: 19.083898251175313,
      lng: 72.84046909262347,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Rita Parekh at Vileparle West",
      area: "31646",
      client: "Rita Parekh",
      lat: 19.098760472012852,
      lng: 72.85151957997996,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Millennium Court Co.Op.Hsg at Bandra East",
      area: "45868",
      client: "Shahid Khan",
      lat: 19.146339866251097,
      lng: 72.83206790990712,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Lily White at JVLR",
      area: "146390",
      client: "Amal Group",
      lat: 19.13803965076899,
      lng: 72.8635916424327,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "WoodWind at Andheri Chakala",
      area: "46336",
      client: "P.R Developers",
      lat: 19.10993030429986,
      lng: 72.85658351106227,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Crescent Grande at Andheri Mogra",
      area: "68567",
      client: "Crescent Group",
      lat: 19.12502880902238,
      lng: 72.84980995961784,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Crescent Heritage at Bandra",
      area: "81161",
      client: "Crystal Developers",
      lat: 19.064698589525428,
      lng: 72.83763901175115,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Palavi Sadan at Ghatkoper Kirol",
      area: "25834",
      client: "Shanti Enterprises",
      lat: 19.077282387114153,
      lng: 72.91142496388555,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Parag CHS at Goregaon West",
      area: "19375",
      client: "M/s Golden Land (Jatin Desai)",
      lat: 19.162954009907494,
      lng: 72.840880689277,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "HAWA HERA at Malad West",
      area: "40903",
      client: "Patel Developers",
      lat: 19.188572880127104,
      lng: 72.85770355466086,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Raj-Nandini at Bandra West",
      area: "16146",
      client: "Niraj Kakad Conctructions",
      lat: 19.075868152197003,
      lng: 72.82721031359654,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Integrated Ahana at Ghatkoper West",
      area: "34649",
      client: "Integrated Spaces",
      lat: 19.08391160519606,
      lng: 72.90203639456607,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Umiya Mahal at Mulund West",
      area: "33553",
      client: "Padmavati Developers",
      lat: 19.178724249549536,
      lng: 72.94856551175292,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Integrated Arya at Ghatkoper West",
      area: "74175",
      client: "Integrated Spaces",
      lat: 19.178703982811207,
      lng: 72.94857624058795,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Parijat society at JB Nagar Andheri",
      area: "33487",
      client: "Sunil Navpalia",
      lat: 19.11524774262488,
      lng: 72.84199923777378,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Jeevan Sarita Chs at Vileparle East",
      area: "86112",
      client: "Arkade Developers Pvt. Ltd.",
      lat: 19.10684402450052,
      lng: 72.84948883874159,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Naik Niwas at Bandra West",
      area: "24757",
      client: "Niraj Kakad Construction",
      lat: 19.059400071918592,
      lng: 72.83527418822031,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Rajgriha Society at Mulund East",
      area: "32206",
      client: "Padmavati Developers",
      lat: 19.166327173163452,
      lng: 72.96034226841579,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Flora Marble at Vileparle East",
      area: "31216",
      client: "Amit Jalan",
      lat: 19.092775810992094,
      lng: 72.85012315072566,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Satyadeep C.H.S. at goregaon West",
      area: "29601",
      client: "Sai Developers",
      lat: 19.160230075864472,
      lng: 72.84465025223726,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Divine Chs at andheri Chakala",
      area: "195905",
      client: "Calvin Proporties",
      lat: 19.113821239918707,
      lng: 72.86374374540213,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Sital Thakkar",
      area: "46612",
      client: "Sital Thakkar",
      lat: 19.058872610829727,
      lng: 72.8897266083206,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Sindhi Society at Chembur",
      area: "27556",
      client: "Niraj Kakad Construction",
      lat: 19.050776336392946,
      lng: 72.89069554825606,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Govind Kunj at Vileparle",
      area: "15070",
      client: "Ashesh Bhai",
      lat: 19.023473963274004,
      lng: 72.85347942709056,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Bagle House at Bandra East",
      area: "9149",
      client: "Sapphire Group & Company",
      lat: 19.063885797466533,
      lng: 72.82497460570677,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Crescent Imperia at Kolekalyan",
      area: "28306",
      client: "Crescent Group",
      lat: 19.073665879420872,
      lng: 72.8662358982564,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Rishi Kapoor House at Pali Hill Bandra",
      area: "82345",
      client: "Rishi Kapoor",
      lat: 19.06897456340091,
      lng: 72.82314989825635,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Juhu Tara at Santacruz",
      area: "26910",
      client: "Vishesh Nihalani",
      lat: 19.09426584243857,
      lng: 72.82831394405369,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Kripa Majestik at Bandra West",
      area: "27986",
      client: "Kripa Group",
      lat: 19.07471152357183,
      lng: 72.83507447037935,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Vijay Raj Estates at Bandra",
      area: "25134",
      client: "Raunak Group",
      lat: 19.10938098433385,
      lng: 72.84880656941397,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Dan Kutir at Bandra West",
      area: "19913",
      client: "Niraj Kakad Construction",
      lat: 19.096479700781515,
      lng: 72.85717513790703,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "J.B Nagar at andheri east",
      area: "24219",
      client: "Sai Developers",
      lat: 19.111116852446113,
      lng: 72.86735839944168,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Fabricon - Service Industry at Santacruz West",
      area: "29063",
      client: "Sai Everest Builders & Developers",
      lat: 19.08713552804386,
      lng: 72.83562651175144,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Garden View at Ghatkoper",
      area: "143473",
      client: "Sai Everest Builders & Developers",
      lat: 19.078350150646397,
      lng: 72.90826735937245,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "ASHIRWAD BUNGLOW at Carter Road",
      area: "40939",
      client: "SHASHI KIRAN",
      lat: 19.06240154925369,
      lng: 72.82275004243147,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Adamas Plaza at Kalina",
      area: "94185",
      client: "M/s. Rosy Blue (India) Pvt. Ltd.",
      lat: 19.072936461165074,
      lng: 72.86581650990595,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Arena Space at Jogeshwari East",
      area: "315385",
      client: "Arena Enterprises",
      lat: 19.138213229863396,
      lng: 72.86402613689675,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Asian Paints at Kalina",
      area: "409032",
      client: "M/s. Asian Paints Ltd",
      lat: 19.080363216643743,
      lng: 72.8677042568415,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Trimurti CHS at Santacruz West",
      area: "132935",
      client: "Evershine Builders",
      lat: 19.078694835284914,
      lng: 72.83261059641109,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Meenakshi CHS at Kalina",
      area: "70095",
      client: "Kumar Builders",
      lat: 19.069478684095643,
      lng: 72.83445969825647,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Kamal Galani at Khar West",
      area: "72818",
      client: "Beam Developers",
      lat: 19.071122817800703,
      lng: 72.83213650378804,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Link Komal CHS at Santacruz West",
      area: "178715",
      client: "KTG Developers",
      lat: 19.07807794765764,
      lng: 72.83469515085858,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Sai Darshan at Khar West",
      area: "57049",
      client: "Mayfair",
      lat: 19.070240202670266,
      lng: 72.83681753884136,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Gehna Jewellers at Bandra West",
      area: "32809",
      client: "M/s Gehna Edifices",
      lat: 19.05976041421635,
      lng: 72.833710725349,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Excel Studio at Khar",
      area: "96015",
      client: "EXCEL entertainment",
      lat: 19.076673167858605,
      lng: 72.8316779717655,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "WILLADEL SOCIETY at Bandra West",
      area: "19375",
      client: "PRAKASH ABODES LLP",
      lat: 19.059542475298407,
      lng: 72.83055462075868,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Dwarka Mai CHS Limited",
      area: "21528",
      client: "Kripa",
      lat: 19.09994193579401,
      lng: 73.00416895218228,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Golden Rays Society",
      area: "31754",
      client: "Vinayak Builders & Developers",
      lat: 19.12003094772971,
      lng: 72.89523141000613,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "WestBay at Bandra Talav",
      area: "172224",
      client: "Transcon",
      lat: 19.0561639046469,
      lng: 72.83628913072977,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Redevelopment of Rita Villa , andheri (east ) ",
      area: " 45,000 ",
      client: "M/s Dipti Group ",
      lat: 19.121657109048034,
      lng: 72.88604588302198,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Development of  plot at Kurla Chembur for TDR ",
      area: " NA ",
      client: "M/s Lallu bhai Amichand ",
      lat: 19.073016072884233,
      lng: 72.88251029946048,
      company: "YMSCL",
      img: YMSCL
    },
    {
      desc: "Redevleopment of plot bearing CTS 590, KHAr ",
      area: " NA ",
      client: "Mahir Saigara on behalf of  Inderji Mohanlal Bhatia ",
      lat: 19.075918048340693,
      lng: 72.8257221895729,
      company: "YMSCL",
      img: YMSCL
    }
]

const data = [
  {
    name: "Bandra",
    lat: 19.0596,
    lng: 72.8295,
    sites: 22,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Khar",
    lat: 19.0699,
    lng: 72.8374,
    sites: 22,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Vile Parle",
    lat: 19.0968,
    lng: 72.8517,
    sites: 9,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Mulund",
    lat: 19.1765,
    lng: 72.9475,
    sites: 5,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "DESIGN OF SALE BUILDING ON SRA SCHEME - FOR MAHALAXMI CO- HOUSING SOCIETY -45 STOREY TOWER WITH 8 STOREY PARKING  \" Victoria  \"",
    lat: 19.1136,
    lng: 72.8697,
    sites: 23000,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Sanatacruz",
    lat: 19.0843,
    lng: 72.836,
    sites: 20,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Juhu",
    lat: 19.1075,
    lng: 72.8263,
    sites: 5,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Jogeshwari",
    lat: 19.1439,
    lng: 72.8428,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Goregaon",
    lat: 19.1663,
    lng: 72.8526,
    sites: 7,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Ghatkopar",
    lat: 19.079,
    lng: 72.908,
    sites: 4,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Malad",
    lat: 19.1874,
    lng: 72.8484,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Kurla",
    lat: 19.0726,
    lng: 72.8845,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Versova",
    lat: 19.1351,
    lng: 72.8146,
    sites: 1,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Kalina",
    lat: 19.0763,
    lng: 72.8654,
    sites: 4,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Kandivali",
    lat: 19.2029,
    lng: 72.8518,
    sites: 2,
    company: "YMSCL",
    img: YMSCL,
  },
  {
    name: "Mahim",
    lat: 19.0354,
    lng: 72.8423,
    sites: 9,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Mazgaon",
    lat: 18.9644,
    lng: 72.8421,
    sites: 7,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Byculla",
    lat: 18.975,
    lng: 72.8295,
    sites: 5,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Parel",
    lat: 18.9977,
    lng: 72.8376,
    sites: 9,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Dadar",
    lat: 19.0178,
    lng: 72.8478,
    sites: 10,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Matunga",
    lat: 19.0269,
    lng: 72.8553,
    sites: 35,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Walkeshwar",
    lat: 18.9508,
    lng: 72.8021,
    sites: 1,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "DESIGN OF SALE BUILDING ON SRA SCHEME - FOR MAHALAXMI CO- HOUSING SOCIETY -45 STOREY TOWER WITH 8 STOREY PARKING  \" Victoria  \"",
    lat: 19.1136,
    lng: 72.8697,
    sites: 6,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Fort",
    lat: 18.9345,
    lng: 72.8371,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Tardeo",
    lat: 18.9676,
    lng: 72.8141,
    sites: 3,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Marine Drive",
    lat: 18.9555,
    lng: 72.8126,
    sites: 1,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Babulnath",
    lat: 18.9593,
    lng: 72.8087,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Mulund",
    lat: 19.1765,
    lng: 72.9475,
    sites: 1,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Wadala",
    lat: 19.0149,
    lng: 72.8631,
    sites: 4,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Shivaji Park",
    lat: 19.0303,
    lng: 72.8384,
    sites: 6,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Carmichael Road",
    lat: 18.9722,
    lng: 72.8113,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Malabar Hill",
    lat: 18.9548,
    lng: 72.7985,
    sites: 2,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Sion",
    lat: 19.039,
    lng: 72.8619,
    sites: 10,
    company: "BNSA+SC",
    img: BNSA,
  },
  {
    name: "Worli",
    lat: 18.9986,
    lng: 72.8174,
    sites: 3,
    company: "BNSA+SC",
    img: BNSA,
  },
];

type OptionType = {
  lng: number;
  lat: number;
  area: string;
  client: string;
  desc: string;
  img?: StaticImageData;
  company?: string;
  label?: string;
  value?: number;
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(
    /** @type google.maps.Map */ null
  );

  const [activeMarker, setActiveMarker] = useState(-1);
  const [infoDomReady, setInfoDomReady] = useState(false);

  const [markers, setMarkers] = useState<OptionType[]>(
    data2.map((marker, index) => ({
      ...marker,
      label: marker?.client,
      value: index + 1,
    }))
  );

  const [userCoords, setUserCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 19.0645,
    lng: 72.8359,
  });

  async function getLatLong(address: string) {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC_A5HGA5UD40AEDoh-cU_z2zOrCA3Ie9U`
    );
    const data = await res.json();
    console.log(data.results[0].geometry.location);
    return data.results[0].geometry.location;
  }

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    if (map && infoDomReady && activeMarker !== -1) {
      map.panTo(markers[activeMarker - 1]);
    }
  }, [activeMarker, infoDomReady, map]);

  if (!isLoaded) {
    return (
      <div className="flex h-screen w-screen justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="flex relative flex-col items-center h-screen w-screen">
      <aside className="hidden md:flex absolute left-0 top-0 h-full w-[30%] flex-col items-center bg-white p-4">
        <div className="w-full flex flex-col gap-2 p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-black">Search Places 🔍</h2>

          <Select
            options={markers.map((marker, index) => {
              return {
                ...marker,
                label: marker?.client + ` (${marker?.company})`,
              };
            })}
            onChange={(e) => {
              console.log(e);
              if (e?.value === undefined) return;
              map?.panTo(markers[e?.value - 1]);
              handleActiveMarker(e?.value);
            }}
            className="w-full"
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
            name="modelIndex"
            styles={{
              option: (base) => ({
                ...base,
                color: "black",
              }),
            }}
          />
        </div>
        <ul className="flex flex-col gap-2 border-b border-gray-700 overflow-y-auto noscr w-full">
          {markers
            // .sort((a, b) => (a.sites > b.sites ? -1 : 1))
            .map((marker, index) => (
              <li
                key={index}
                className={`flex items-center justify-between w-full p-4 cursor-pointer ${
                  activeMarker === index + 1
                    ? "bg-gray-700 text-white"
                    : "text-black"
                }`}
                onClick={() => {
                  handleActiveMarker(index + 1);
                  map?.panTo(markers[index]);
                }}
              >
                <div className="flex items-center gap-2">
                  <img src={marker?.img?.src} alt="CAT" className="w-8 h-8" />
                  <span className="text-sm font-semibold">
                    {marker.client + ` (${marker.company})`}
                  </span>
                </div>
                {/* <span className="text-sm font-semibold">{marker.sites}</span> */}
              </li>
            ))}
        </ul>
      </aside>

      <nav className="z-10 flex absolute top-4 w-[95%] m-auto md:hidden bg-white shadow-xl p-4 rounded-md">
        <Select
          options={markers.map((marker, index) => {
            return {
              ...marker,
              label: marker?.client + ` (${marker?.company})`,
            };
          })}
          onChange={(e) => {
            console.log(e);
            if (e?.value === undefined) return;
            map?.panTo(markers[e?.value - 1]);
            handleActiveMarker(e?.value);
          }}
          className="w-full"
          classNamePrefix="select"
          isClearable={true}
          isSearchable={true}
          name="modelIndex"
          styles={{
            option: (base) => ({
              ...base,
              color: "black",
            }),
          }}
        />
      </nav>

      <div className="absolute right-0 top-0 h-full w-full md:w-[70%]">
        <GoogleMap
          onClick={() => setActiveMarker(-1)}
          center={userCoords}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            setMap(map);
          }}
        >
          <MarkerF
            onClick={() => handleActiveMarker(0)}
            position={{
              lat: userCoords?.lat || 19.0645,
              lng: userCoords?.lng || 72.8359,
            }}
            icon={
              YouPNG.src ||
              "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            }
          />

          {markers.map((marker, index) => (
            <MarkerF
              key={index}
              onClick={() => handleActiveMarker(index + 1)}
              position={{ lat: marker.lat, lng: marker.lng }}
              // icon={(marker.company === "YMSCL" ?  marker?.img?.src : marker?.img?.src) || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              icon={{
                url:
                  marker.company === "YMSCL"
                    ? YMSCLPICKER.src
                    : marker.company === "BNSA+SC"
                    ? BNAPICKER.src
                    : "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                scaledSize: new google.maps.Size(50, 50),
                origin: new google.maps.Point(0, 0),
              }}
            >
              {/* Infobox */}
              {activeMarker === index + 1 && (
                <InfoBox
                  options={{ closeBoxURL: ``, enableEventPropagation: true }}
                  onDomReady={() => setInfoDomReady(true)}
                  onUnmount={() => setInfoDomReady(false)}
                >
                  <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-xl h-max">
                    {/* <div className="flex items-center justify-center">
                                                    <img src={YouPNG.src || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"} alt="You" className="w-8 h-8" />
                                                    <span className="text-sm font-semibold text-black">You</span>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                    <span className="text-xs font-semibold text-black">Lat: {center.lat.toFixed(4)}</span>
                                                    <span className="text-xs font-semibold text-black">Lng: {center.lng.toFixed(4)}</span>
                                                    </div> */}

                    <div className="absolute right-2 top-2 cursor-pointer bg-white p-1">
                      <RxCross2
                        className="w-6 h-6 text-black"
                        onClick={() => handleActiveMarker(-1)}
                      />
                    </div>
                    <Option marker={marker} />
                  </div>
                </InfoBox>
              )}
            </MarkerF>
          ))}
          {/* {
            polMarkers?.map((marker, index) => (
              <Marker
                key={index}
                onClick={() => handleActiveMarker(index + 1)}
                position={{ lat: marker.latitude, lng: marker.longitude }}
                icon={PoliceCar.src || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
              >
                {
                  activeMarker === index + 1 && (
                    <InfoBox
                      options={{ closeBoxURL: ``, enableEventPropagation: true }}
                      onDomReady={() => setInfoDomReady(true)}
                      onUnmount={() => setInfoDomReady(false)}
                    >
                      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-xl">
                        <div className="flex items-center justify-center">
                          <img src={CAT.src || "http://maps.google.com/mapfiles/ms/icons/green-dot.png"} alt="You" className="w-32 h-32" />
                          <span className="text-sm font-semibold text-black">You</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <span className="text-xs font-semibold text-black">Lat: {userCoords.lat.toFixed(4)}</span>
                          <span className="text-xs font-semibold text-black">Lng: {userCoords.lng.toFixed(4)}</span>
                        </div>

                        <div className='absolute right-2 top-2 cursor-pointer bg-white p-1'>
                          <RxCross2 className='w-6 h-6 text-black' onClick={() => handleActiveMarker(-1)} />
                        </div>
                      </div>
                    </InfoBox>
                  )
                }
              </Marker>
            ))
          } */}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Map;
