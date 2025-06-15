# AK Code Lab Patient-Care Platform - Project Architecture

## 📋 Project Overview

**Project Name:** Patient-Care Healthcare Management System  
**Project Lead:** Er. Amuthan Arries C / Lead T&D  
**GitHub:** [amuthanarries](https://github.com/amuthanarries)  
**Description:** A comprehensive full-stack web application that enables healthcare providers to manage patient records, schedule appointments, and track medical histories with secure authentication. Features include patient registration, appointment booking, prescription tracking, and role-based access for doctors and staff.  
**Technology Stack:** MERN Stack (MongoDB, Express.js, React.js, Node.js)

## 👥 Team Structure & Roles

### Core Development Team
1. **Keerthana S** - Frontend Developer
2. **Midhuna S** - Frontend Developer  
3. **Hariharan R** - Backend Developer
4. **Selvaraj K** - Backend Developer
5. **Hemalatha M** - UI/UX Developer
6. **Akshay Thiagu K V** - Frontend Developer

### Specialized Roles
7. **Selvigensh S** - Backend Developer / Lead Engineering / AKCL
8. **Keerthana E** - DevOps Engineer
9. **Niteesh Kumar G K** - Full Stack Developer / AKCL
10. **Siva S** - QA Engineer / AKCL
11. **Amuthan Arries C** - Database Architect / Lead T&D / AKCL

---

## 🏗️ System Architecture

### High-Level Architecture Diagram
```
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                                 │
├─────────────────────┬───────────────────┬───────────────────────┤
│   Web Application   │   Mobile App      │   Admin Dashboard     │
│   (React.js)        │   (React Native)  │   (React.js)          │
└─────────────────────┴───────────────────┴───────────────────────┘
                              │
                    ┌─────────▼─────────┐
                    │   Load Balancer   │
                    │   (Nginx/HAProxy) │
                    └─────────┬─────────┘
                              │
┌─────────────────────────────▼─────────────────────────────────────┐
│                    APPLICATION LAYER                               │
├─────────────────┬─────────────────┬─────────────────┬─────────────┤
│   Auth Service  │  Patient Service│Appointment Svc  │ Medical Svc │
│   (Node.js)     │   (Node.js)     │   (Node.js)     │  (Node.js)  │
└─────────────────┴─────────────────┴─────────────────┴─────────────┘
                              │
              ┌───────────────▼───────────────┐
              │        MESSAGE QUEUE          │
              │      (Redis/RabbitMQ)         │
              └───────────────┬───────────────┘
                              │
┌─────────────────────────────▼─────────────────────────────────────┐
│                      DATA LAYER                                   │
├─────────────────┬─────────────────┬─────────────────┬─────────────┤
│   MongoDB       │   Redis Cache   │  File Storage   │  Audit DB   │
│   (Primary DB)  │   (Session)     │  (AWS S3/Local) │ (MongoDB)   │  
└─────────────────┴─────────────────┴─────────────────┴─────────────┘
```

---

## 🎯 Core Healthcare Features

### 1. Patient Management System
- **Patient Registration**: Comprehensive patient onboarding with medical history
- **Profile Management**: Personal info, insurance details, emergency contacts
- **Medical Records**: Digital health records with document upload
- **Patient Portal**: Self-service access to medical information
- **Family Member Management**: Dependent patient management

### 2. Appointment Management
- **Online Scheduling**: Calendar-based appointment booking system
- **Doctor Availability**: Real-time schedule management
- **Appointment Types**: Consultation, follow-up, emergency, telemedicine
- **Automated Reminders**: SMS/Email notifications for appointments
- **Rescheduling & Cancellation**: Flexible appointment modifications

### 3. Medical Records & Prescriptions
- **Electronic Health Records (EHR)**: Comprehensive patient medical history
- **Prescription Management**: Digital prescription creation and tracking
- **Lab Results Integration**: Test results and diagnostic reports
- **Medical Imaging**: X-ray, MRI, CT scan storage and viewing
- **Treatment Plans**: Personalized care plans and follow-up schedules

### 4. Healthcare Provider Management
- **Doctor Profiles**: Specialization, qualifications, availability
- **Staff Management**: Nurses, technicians, administrative staff
- **Department Organization**: Cardiology, Orthopedics, Pediatrics, etc.
- **Shift Scheduling**: Staff duty rosters and coverage planning
- **Performance Analytics**: Healthcare provider metrics

### 5. Billing & Insurance
- **Insurance Verification**: Real-time insurance eligibility checks
- **Claims Processing**: Automated insurance claim generation
- **Payment Integration**: Secure payment processing for co-pays
- **Billing History**: Comprehensive billing and payment records
- **Insurance Coverage**: Policy details and coverage information

### 6. Compliance & Security
- **HIPAA Compliance**: Healthcare data privacy and security standards
- **Audit Trails**: Complete activity logging and monitoring
- **Access Controls**: Role-based permissions and data access
- **Data Encryption**: End-to-end encryption for sensitive data
- **Consent Management**: Patient consent tracking and documentation

---

## 🔧 Technical Architecture

### Frontend Architecture (React.js)
```
src/
├── components/
│   ├── common/              # Reusable UI components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── LoadingSpinner/
│   │   ├── Modal/
│   │   └── DataTable/
│   ├── auth/               # Authentication components
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ForgotPassword.jsx
│   │   └── TwoFactorAuth.jsx
│   ├── patient/            # Patient management components
│   │   ├── PatientRegistration.jsx
│   │   ├── PatientProfile.jsx
│   │   ├── PatientList.jsx
│   │   ├── MedicalHistory.jsx
│   │   └── PatientSearch.jsx
│   ├── appointment/        # Appointment components
│   │   ├── AppointmentBooking.jsx
│   │   ├── AppointmentCalendar.jsx
│   │   ├── AppointmentList.jsx
│   │   └── TimeSlotPicker.jsx
│   ├── medical/            # Medical records components
│   │   ├── PrescriptionForm.jsx
│   │   ├── LabResults.jsx
│   │   ├── MedicalDocuments.jsx
│   │   └── TreatmentPlan.jsx
│   ├── dashboard/          # Dashboard components
│   │   ├── DoctorDashboard.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── Analytics.jsx
│   └── billing/            # Billing components
│       ├── InvoiceGeneration.jsx
│       ├── PaymentForm.jsx
│       ├── InsuranceVerification.jsx
│       └── BillingHistory.jsx
├── pages/
│   ├── Home.jsx
│   ├── PatientPortal.jsx
│   ├── DoctorPortal.jsx
│   ├── AdminPortal.jsx
│   ├── AppointmentPage.jsx
│   └── ProfilePage.jsx
├── hooks/                  # Custom React hooks
│   ├── useAuth.js
│   ├── usePatients.js
│   ├── useAppointments.js
│   ├── useMedicalRecords.js
│   └── useBilling.js
├── services/               # API integration
│   ├── api.js
│   ├── authService.js
│   ├── patientService.js
│   ├── appointmentService.js
│   ├── medicalService.js
│   └── billingService.js
├── context/                # React Context
│   ├── AuthContext.js
│   ├── PatientContext.js
│   ├── AppointmentContext.js
│   └── ThemeContext.js
├── utils/                  # Utility functions
│   ├── constants.js
│   ├── helpers.js
│   ├── validators.js
│   ├── dateUtils.js
│   └── encryption.js
└── assets/                 # Static assets
    ├── images/
    ├── styles/
    ├── icons/
    └── documents/
```

### Backend Architecture (Node.js + Express.js)
```
server/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── patientController.js
│   │   ├── appointmentController.js
│   │   ├── medicalRecordController.js
│   │   ├── prescriptionController.js
│   │   ├── billingController.js
│   │   ├── insuranceController.js
│   │   └── adminController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Patient.js
│   │   ├── Doctor.js
│   │   ├── Appointment.js
│   │   ├── MedicalRecord.js
│   │   ├── Prescription.js
│   │   ├── Insurance.js
│   │   ├── Billing.js
│   │   └── AuditLog.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── patients.js
│   │   ├── appointments.js
│   │   ├── medical-records.js
│   │   ├── prescriptions.js
│   │   ├── billing.js
│   │   ├── insurance.js
│   │   └── admin.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── roleCheck.js
│   │   ├── validation.js
│   │   ├── rateLimit.js
│   │   ├── auditLog.js
│   │   ├── encryption.js
│   │   └── errorHandler.js
│   ├── services/
│   │   ├── emailService.js
│   │   ├── smsService.js
│   │   ├── encryptionService.js
│   │   ├── insuranceService.js
│   │   ├── notificationService.js
│   │   ├── reportService.js
│   │   └── backupService.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── constants.js
│   │   ├── validators.js
│   │   ├── logger.js
│   │   ├── dateUtils.js
│   │   └── hipaaUtils.js
│   └── config/
│       ├── database.js
│       ├── redis.js
│       ├── encryption.js
│       ├── email.js
│       ├── sms.js
│       └── insurance.js
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── docs/
    ├── api/
    ├── deployment/
    └── compliance/
```

### Database Schema (MongoDB)

#### User Schema
```javascript
{
  _id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  role: String, // 'patient', 'doctor', 'nurse', 'admin', 'staff'
  profile: {
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String,
    dateOfBirth: Date,
    gender: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String
    }
  },
  credentials: {
    licenseNumber: String, // for healthcare providers
    specialization: [String],
    qualifications: [String],
    department: String
  },
  preferences: {
    language: String,
    timezone: String,
    notifications: {
      email: Boolean,
      sms: Boolean,
      push: Boolean
    }
  },
  security: {
    twoFactorEnabled: Boolean,
    lastPasswordChange: Date,
    loginAttempts: Number,
    lockoutUntil: Date
  },
  isActive: Boolean,
  isVerified: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### Patient Schema
```javascript
{
  _id: ObjectId,
  patientId: String (unique), // Hospital-specific ID
  userId: ObjectId (ref: User),
  demographics: {
    mrn: String, // Medical Record Number
    ssn: String (encrypted),
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String,
      email: String
    },
    maritalStatus: String,
    occupation: String,
    employer: String
  },
  medicalInformation: {
    bloodType: String,
    allergies: [{
      allergen: String,
      severity: String,
      reaction: String,
      onsetDate: Date
    }],
    chronicConditions: [{
      condition: String,
      diagnosedDate: Date,
      status: String, // active, resolved, managed
      medications: [String]
    }],
    familyHistory: [{
      relationship: String,
      condition: String,
      ageOfOnset: Number
    }],
    socialHistory: {
      smoking: String,
      alcohol: String,
      drugs: String,
      exercise: String
    }
  },
  insurance: [{
    provider: String,
    policyNumber: String (encrypted),
    groupNumber: String,
    planType: String,
    effectiveDate: Date,
    expirationDate: Date,
    isPrimary: Boolean,
    copay: Number,
    deductible: Number
  }],
  documents: [{
    type: String,
    filename: String,
    url: String,
    uploadedBy: ObjectId,
    uploadedAt: Date,
    isEncrypted: Boolean
  }],
  privacy: {
    shareWithFamily: Boolean,
    shareWithInsurance: Boolean,
    marketingOptOut: Boolean,
    consentDate: Date,
    consentVersion: String
  },
  createdAt: Date,
  updatedAt: Date,
  isActive: Boolean
}
```

#### Appointment Schema
```javascript
{
  _id: ObjectId,
  appointmentId: String (unique),
  patient: {
    patientId: ObjectId (ref: Patient),
    name: String,
    phone: String,
    email: String
  },
  provider: {
    doctorId: ObjectId (ref: User),
    name: String,
    department: String,
    location: String
  },
  scheduling: {
    scheduledDate: Date,
    startTime: Date,
    endTime: Date,
    duration: Number, // in minutes
    timeZone: String
  },
  appointmentDetails: {
    type: String, // consultation, follow-up, procedure, emergency
    reason: String,
    priority: String, // routine, urgent, emergency
    isNewPatient: Boolean,
    referringDoctor: String,
    notes: String
  },
  status: {
    current: String, // scheduled, confirmed, in-progress, completed, cancelled, no-show
    history: [{
      status: String,
      timestamp: Date,
      changedBy: ObjectId,
      reason: String
    }]
  },
  reminders: {
    email: {
      sent: Boolean,
      sentAt: Date
    },
    sms: {
      sent: Boolean,
      sentAt: Date
    },
    push: {
      sent: Boolean,
      sentAt: Date
    }
  },
  followUp: {
    required: Boolean,
    scheduledDate: Date,
    notes: String
  },
  billing: {
    estimatedCost: Number,
    insuranceCovered: Boolean,
    copayAmount: Number,
    paymentStatus: String
  },
  createdBy: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

#### Medical Record Schema
```javascript
{
  _id: ObjectId,
  recordId: String (unique),
  patient: {
    patientId: ObjectId (ref: Patient),
    mrn: String
  },
  encounter: {
    appointmentId: ObjectId (ref: Appointment),
    date: Date,
    provider: ObjectId (ref: User),
    department: String,
    facility: String
  },
  visit: {
    chiefComplaint: String,
    historyOfPresentIllness: String,
    reviewOfSystems: Object,
    physicalExamination: {
      vitalSigns: {
        temperature: Number,
        bloodPressure: String,
        heartRate: Number,
        respiratoryRate: Number,
        oxygenSaturation: Number,
        weight: Number,
        height: Number,
        bmi: Number
      },
      generalAppearance: String,
      systemsExamination: Object
    }
  },
  assessment: {
    diagnoses: [{
      code: String, // ICD-10 code
      description: String,
      type: String, // primary, secondary
      severity: String,
      status: String // active, resolved, chronic
    }],
    differentialDiagnosis: [String],
    clinicalImpression: String
  },
  plan: {
    treatments: [{
      type: String,
      description: String,
      startDate: Date,
      endDate: Date,
      frequency: String,
      dosage: String
    }],
    medications: [ObjectId], // ref: Prescription
    procedures: [{
      name: String,
      code: String,
      scheduledDate: Date,
      provider: String,
      notes: String
    }],
    followUp: {
      required: Boolean,
      timeframe: String,
      instructions: String
    },
    referrals: [{
      specialist: String,
      reason: String,
      urgency: String,
      notes: String
    }]
  },
  labOrders: [{
    test: String,
    code: String,
    orderedDate: Date,
    priority: String,
    instructions: String,
    results: {
      value: String,
      unit: String,
      normalRange: String,
      abnormalFlag: String,
      resultDate: Date
    }
  }],
  attachments: [{
    type: String,
    filename: String,
    url: String,
    description: String,
    uploadedAt: Date
  }],
  signatures: {
    provider: {
      signature: String,
      timestamp: Date,
      ipAddress: String
    },
    patient: {
      signature: String,
      timestamp: Date,
      ipAddress: String
    }
  },
  privacy: {
    isConfidential: Boolean,
    accessRestrictions: [String],
    consentStatus: String
  },
  createdAt: Date,
  updatedAt: Date,
  version: Number
}
```

#### Prescription Schema
```javascript
{
  _id: ObjectId,
  prescriptionId: String (unique),
  patient: {
    patientId: ObjectId (ref: Patient),
    name: String,
    dateOfBirth: Date,
    allergies: [String]
  },
  prescriber: {
    doctorId: ObjectId (ref: User),
    name: String,
    licenseNumber: String,
    deaNumber: String,
    phone: String
  },
  medications: [{
    drugName: String,
    genericName: String,
    strength: String,
    dosageForm: String, // tablet, capsule, liquid, injection
    route: String, // oral, topical, injection
    dosage: {
      amount: String,
      frequency: String,
      duration: String,
      totalQuantity: Number,
      refills: Number
    },
    instructions: String,
    indications: String,
    warnings: [String],
    drugCode: String, // NDC number
    isControlledSubstance: Boolean,
    scheduleClass: String
  }],
  pharmacy: {
    name: String,
    address: String,
    phone: String,
    pharmacyId: String
  },
  dates: {
    prescribed: Date,
    startDate: Date,
    endDate: Date,
    lastFilled: Date,
    nextRefill: Date
  },
  status: {
    current: String, // active, completed, cancelled, expired
    dispensed: Boolean,
    dispensedDate: Date,
    pharmacist: String
  },
  interactions: {
    drugDrug: [String],
    drugAllergy: [String],
    warnings: [String]
  },
  billing: {
    insuranceCovered: Boolean,
    copayAmount: Number,
    totalCost: Number,
    patientPay: Number
  },
  electronicSignature: {
    signature: String,
    timestamp: Date,
    method: String // digital, electronic, wet signature
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### Billing Schema
```javascript
{
  _id: ObjectId,
  invoiceId: String (unique),
  patient: {
    patientId: ObjectId (ref: Patient),
    name: String,
    address: Object,
    phone: String,
    email: String
  },
  provider: {
    facility: String,
    address: Object,
    taxId: String,
    npi: String
  },
  services: [{
    date: Date,
    description: String,
    cptCode: String,
    quantity: Number,
    unitPrice: Number,
    totalAmount: Number,
    provider: String,
    department: String
  }],
  insurance: {
    primary: {
      carrier: String,
      policyNumber: String,
      groupNumber: String,
      claimNumber: String,
      preAuthNumber: String
    },
    secondary: {
      carrier: String,
      policyNumber: String,
      groupNumber: String
    }
  },
  amounts: {
    subtotal: Number,
    tax: Number,
    discount: Number,
    insurancePayment: Number,
    patientResponsibility: Number,
    totalDue: Number,
    amountPaid: Number,
    balance: Number
  },
  payment: {
    method: String, // cash, check, card, insurance
    transactionId: String,
    paymentDate: Date,
    confirmationNumber: String,
    status: String // pending, paid, partial, overdue
  },
  dates: {
    serviceDate: Date,
    invoiceDate: Date,
    dueDate: Date,
    paidDate: Date
  },
  status: String, // draft, sent, paid, overdue, cancelled
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Security & HIPAA Compliance

### Healthcare Data Security
- **HIPAA Compliance**: Complete adherence to healthcare privacy regulations
- **Data Encryption**: AES-256 encryption for data at rest and in transit
- **Access Controls**: Role-based permissions with minimum necessary access
- **Audit Logging**: Comprehensive activity tracking and monitoring
- **Secure Authentication**: Multi-factor authentication for all users

### Authentication & Authorization
```javascript
// Role-based Access Control
const roles = {
  PATIENT: {
    permissions: [
      'read:own_medical_records',
      'read:own_appointments',
      'create:appointment_request',
      'update:own_profile'
    ]
  },
  DOCTOR: {
    permissions: [
      'read:patient_medical_records',
      'write:medical_records',
      'read:appointments',
      'write:prescriptions',
      'read:lab_results'
    ]
  },
  NURSE: {
    permissions: [
      'read:patient_basic_info',
      'write:vital_signs',
      'read:appointments',
      'update:appointment_status'
    ]
  },
  ADMIN: {
    permissions: [
      'read:all_data',
      'write:system_settings',
      'manage:users',
      'view:audit_logs'
    ]
  }
};

// Middleware for HIPAA compliance
const hipaaMiddleware = (req, res, next) => {
  // Log all PHI access
  auditLogger.log({
    userId: req.user.id,
    action: req.method + ' ' + req.path,
    timestamp: new Date(),
    ipAddress: req.ip,
    userAgent: req.get('User-Agent'),
    patientId: req.params.patientId
  });
  
  // Check minimum necessary access
  if (!hasMinimumNecessaryAccess(req.user, req.params)) {
    return res.status(403).json({ error: 'Access denied - HIPAA violation' });
  }
  
  next();
};
```

### Encryption Implementation
```javascript
// PHI Encryption Service
const crypto = require('crypto');

class PHIEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
  }

  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipher(this.algorithm, this.key);
    cipher.setAAD(Buffer.from('patient-care-phi'));
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  decrypt(encryptedData) {
    const decipher = crypto.createDecipher(this.algorithm, this.key);
    decipher.setAAD(Buffer.from('patient-care-phi'));
    decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));
    
    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  }
}
```

---

## 🩺 Healthcare Integration APIs

### HL7 FHIR Integration
```javascript
// FHIR Resource Integration
const fhirClient = require('fhir-kit-client');

class FHIRService {
  constructor() {
    this.client = new fhirClient({
      baseUrl: process.env.FHIR_SERVER_URL,
      auth: {
        bearer: process.env.FHIR_ACCESS_TOKEN
      }
    });
  }

  async createPatient(patientData) {
    const fhirPatient = {
      resourceType: 'Patient',
      identifier: [{
        system: 'http://hospital.example.org/patients',
        value: patientData.mrn
      }],
      name: [{
        family: patientData.lastName,
        given: [patientData.firstName]
      }],
      telecom: [{
        system: 'phone',
        value: patientData.phone
      }, {
        system: 'email',
        value: patientData.email
      }],
      gender: patientData.gender.toLowerCase(),
      birthDate: patientData.dateOfBirth
    };

    return await this.client.create({
      resourceType: 'Patient',
      body: fhirPatient
    });
  }

  async createObservation(patientId, vitalSigns) {
    const observation = {
      resourceType: 'Observation',
      status: 'final',
      subject: {
        reference: `Patient/${patientId}`
      },
      component: [
        {
          code: {
            coding: [{
              system: 'http://loinc.org',
              code: '8480-6',
              display: 'Systolic blood pressure'
            }]
          },
          valueQuantity: {
            value: vitalSigns.systolicBP,
            unit: 'mmHg'
          }
        }
      ]
    };

    return await this.client.create({
      resourceType: 'Observation',
      body: observation
    });
  }
}
```

### Insurance Verification API
```javascript
// Insurance Eligibility Service
class InsuranceService {
  async verifyEligibility(patientId, insuranceInfo) {
    const eligibilityRequest = {
      subscriber: {
        id: insuranceInfo.memberId,
        name: insuranceInfo.subscriberName,
        dateOfBirth: insuranceInfo.dateOfBirth
      },
      provider: {
        npi: process.env.PROVIDER_NPI,
        name: process.env.PROVIDER_NAME
      },
      serviceTypes: ['medical_care', 'emergency_services']
    };

    try {
      const response = await axios.post(
        process.env.INSURANCE_API_URL + '/eligibility',
        eligibilityRequest,
        {
          headers: {
            'Authorization': `Bearer ${process.env.INSURANCE_API_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return {
        isEligible: response.data.eligible,
        coverageDetails: response.data.coverage,
        copay: response.data.copay,
        deductible: response.data.deductible,
        effectiveDate: response.data.effectiveDate,
        expirationDate: response.data.expirationDate
      };
    } catch (error) {
      logger.error('Insurance verification failed:', error);
      throw new Error('Unable to verify insurance eligibility');
    }
  }

  async submitClaim(claimData) {
    const claim = {
      claimId: generateClaimId(),
      patient: claimData.patient,
      provider: claimData.provider,
      services: claimData.services,
      diagnosis: claimData.diagnosis,
      totalAmount: claimData.totalAmount
    };

    const response = await axios.post(
      process.env.INSURANCE_API_URL + '/claims',
      claim,
      {
        headers: {
          'Authorization': `Bearer ${process.env.INSURANCE_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  }
}
```

---

# 🚀 Deployment & Infrastructure - Patient-Care Healthcare Platform

## Healthcare Cloud Architecture

### HIPAA-Compliant Production Infrastructure
```yaml
┌─────────────────────────────────────────────────────────────────┐
│                    HIPAA-COMPLIANT CLOUD                        │
├─────────────────────────────────────────────────────────────────┤
│  AWS/Azure Healthcare Cloud (BAA Signed)                       │
│  ├── WAF & DDoS Protection                                     │
│  ├── SSL/TLS Certificates (Let's Encrypt/Commercial)           │
│  └── VPC with Private Subnets                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────▼─────────────────────────────────────┐
│                    LOAD BALANCER TIER                             │
├────────────────┬────────────────┬────────────────┬────────────────┤
│   ALB/NLB      │   Health       │   Auto Scaling │   SSL          │
│   (Multi-AZ)   │   Checks       │   Groups       │   Termination  │
└────────────────┴────────────────┴────────────────┴────────────────┘
                              │
┌─────────────────────────────▼─────────────────────────────────────┐
│                    APPLICATION TIER                               │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┤
│  Frontend   │   Auth      │   API       │   Workers   │   Scheduler │
│  (ECS/EKS)  │   Service   │   Gateway   │   (Queue)   │   (Cron)    │
│  React App  │   (OAuth2)  │   (Express) │   (Bull)    │   (Agenda)  │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
                              │
┌─────────────────────────────▼─────────────────────────────────────┐
│                      DATA TIER                                   │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┤
│  MongoDB    │   Redis     │   S3/Blob   │   Backup    │   Audit     │
│  (Replica   │   (Cache &  │   Storage   │   (Daily)   │   Logs      │
│   Set)      │   Session)  │   (PHI)     │   (PITR)    │   (SIEM)    │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
                              │
┌─────────────────────────────▼─────────────────────────────────────┐
│                   MONITORING & SECURITY                           │
├─────────────┬─────────────┬─────────────┬─────────────┬─────────────┤
│  CloudWatch │   ELK Stack │   Security  │   Backup    │   Disaster  │
│  /Monitor   │   (Logging) │   Scanning  │   Strategy  │   Recovery  │
│  (Metrics)  │   (Audit)   │   (HIPAA)   │   (3-2-1)   │   (RTO/RPO) │
└─────────────┴─────────────┴─────────────┴─────────────┴─────────────┘
```

## Container Orchestration (Kubernetes/ECS)

### Production Kubernetes Deployment
```yaml
# namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: patient-care-prod
  labels:
    environment: production
    compliance: hipaa
---
# frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: patient-care-frontend
  namespace: patient-care-prod
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
  selector:
    matchLabels:
      app: patient-care-frontend
  template:
    metadata:
      labels:
        app: patient-care-frontend
    spec:
      containers:
      - name: frontend
        image: patient-care/frontend:latest
        ports:
        - containerPort: 3000
        env:
        - name: REACT_APP_API_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: api-url
        - name: REACT_APP_HIPAA_MODE
          value: "true"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
---
# backend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: patient-care-backend
  namespace: patient-care-prod
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 2
  selector:
    matchLabels:
      app: patient-care-backend
  template:
    metadata:
      labels:
        app: patient-care-backend
    spec:
      containers:
      - name: backend
        image: patient-care/backend:latest
        ports:
        - containerPort: 8000
        env:
        - name: NODE_ENV
          value: "production"
        - name: MONGODB_URI
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: mongodb-uri
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: cache-secrets
              key: redis-url
        - name: ENCRYPTION_KEY
          valueFrom:
            secretKeyRef:
              name: encryption-secrets
              key: phi-encryption-key
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: auth-secrets
              key: jwt-secret
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 8000
          initialDelaySeconds: 60
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/ready
            port: 8000
          initialDelaySeconds: 10
          periodSeconds: 5
        volumeMounts:
        - name: audit-logs
          mountPath: /app/logs
      volumes:
      - name: audit-logs
        persistentVolumeClaim:
          claimName: audit-logs-pvc
---
# ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: patient-care-ingress
  namespace: patient-care-prod
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
    nginx.ingress.kubernetes.io/cors-allow-origin: "https://patientcare.hospital.com"
spec:
  tls:
  - hosts:
    - api.patientcare.hospital.com
    - app.patientcare.hospital.com
    secretName: patient-care-tls
  rules:
  - host: api.patientcare.hospital.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: patient-care-backend-service
            port:
              number: 8000
  - host: app.patientcare.hospital.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: patient-care-frontend-service
            port:
              number: 3000
```

### Docker Configuration
```dockerfile
# Dockerfile.frontend
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY src ./src
COPY public ./public
COPY tailwind.config.js ./
COPY postcss.config.js ./

# Build optimized production bundle
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Security headers for HIPAA compliance
RUN echo 'add_header X-Frame-Options "SAMEORIGIN" always;' >> /etc/nginx/conf.d/security.conf && \
    echo 'add_header X-Content-Type-Options "nosniff" always;' >> /etc/nginx/conf.d/security.conf && \
    echo 'add_header X-XSS-Protection "1; mode=block" always;' >> /etc/nginx/conf.d/security.conf && \
    echo 'add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;' >> /etc/nginx/conf.d/security.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]

# Dockerfile.backend
FROM node:18-alpine

WORKDIR /app

# Install security updates
RUN apk update && apk upgrade && apk add --no-cache dumb-init

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Copy package files
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy application code
COPY --chown=nodejs:nodejs . .

# Create logs directory for audit trails
RUN mkdir -p /app/logs && chown nodejs:nodejs /app/logs

USER nodejs

EXPOSE 8000

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/server.js"]

# Health check for container orchestration
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node src/utils/healthCheck.js
```

### Docker Compose for Development
```yaml
# docker-compose.yml
version: '3.8'

services:
  # Frontend Service
  frontend:
    build:
      context: ./client
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:8000/api
      - REACT_APP_ENV=development
    volumes:
      - ./client/src:/app/src
      - ./client/public:/app/public
    depends_on:
      - backend
    networks:
      - patient-care-network

  # Backend Service
  backend:
    build:
      context: ./server
      dockerfile: Dockerfile.dev
    ports:
      - "8000:8000"
    environment:
      - NODE_ENV=development
      - MONGODB_URI=mongodb://mongo:27017/patient_care_dev
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=dev_jwt_secret_change_in_production
      - ENCRYPTION_KEY=dev_encryption_key_32_chars_long
    volumes:
      - ./server/src:/app/src
      - ./server/logs:/app/logs
    depends_on:
      - mongo
      - redis
    networks:
      - patient-care-network

  # MongoDB Database
  mongo:
    image: mongo:6.0
    restart: unless-stopped
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin123
      - MONGO_INITDB_DATABASE=patient_care_dev
    volumes:
      - mongo_data:/data/db
      - ./scripts/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
    networks:
      - patient-care-network

  # Redis Cache
  redis:
    image: redis:7-alpine
    restart: unless-stopped
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes --requirepass redis123
    volumes:
      - redis_data:/data
    networks:
      - patient-care-network

  # MongoDB Express (Database Management UI)
  mongo-express:
    image: mongo-express:latest
    restart: unless-stopped
    ports:
      - "8081:8081"
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=admin123
      - ME_CONFIG_MONGODB_URL=mongodb://admin:admin123@mongo:27017/
      - ME_CONFIG_BASICAUTH_USERNAME=admin
      - ME_CONFIG_BASICAUTH_PASSWORD=admin123
    depends_on:
      - mongo
    networks:
      - patient-care-network

  # Redis Insight (Redis Management UI)
  redis-insight:
    image: redislabs/redisinsight:latest
    restart: unless-stopped
    ports:
      - "8001:8001"
    volumes:
      - redis_insight_data:/db
    networks:
      - patient-care-network

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf:ro
      - ./nginx/ssl:/etc/nginx/ssl:ro
    depends_on:
      - frontend
      - backend
    networks:
      - patient-care-network

volumes:
  mongo_data:
  redis_data:
  redis_insight_data:

networks:
  patient-care-network:
    driver: bridge
```

## HIPAA-Compliant Infrastructure

### AWS Healthcare Architecture
```yaml
# terraform/main.tf
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
  
  default_tags {
    tags = {
      Environment   = var.environment
      Project      = "Patient-Care-Platform"
      Compliance   = "HIPAA"
      Owner        = "AK-Code-Lab"
      ManagedBy    = "Terraform"
    }
  }
}

# VPC Configuration
resource "aws_vpc" "patient_care_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "patient-care-vpc-${var.environment}"
  }
}

# Private Subnets for Application Tier
resource "aws_subnet" "private_app_subnets" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.patient_care_vpc.id
  cidr_block        = cidrsubnet(aws_vpc.patient_care_vpc.cidr_block, 8, count.index + 10)
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name = "private-app-subnet-${count.index + 1}-${var.environment}"
    Type = "Application"
  }
}

# Private Subnets for Database Tier
resource "aws_subnet" "private_db_subnets" {
  count             = length(var.availability_zones)
  vpc_id            = aws_vpc.patient_care_vpc.id
  cidr_block        = cidrsubnet(aws_vpc.patient_care_vpc.cidr_block, 8, count.index + 20)
  availability_zone = var.availability_zones[count.index]

  tags = {
    Name = "private-db-subnet-${count.index + 1}-${var.environment}"
    Type = "Database"
  }
}

# Public Subnets for Load Balancer
resource "aws_subnet" "public_subnets" {
  count                   = length(var.availability_zones)
  vpc_id                  = aws_vpc.patient_care_vpc.id
  cidr_block              = cidrsubnet(aws_vpc.patient_care_vpc.cidr_block, 8, count.index)
  availability_zone       = var.availability_zones[count.index]
  map_public_ip_on_launch = true

  tags = {
    Name = "public-subnet-${count.index + 1}-${var.environment}"
    Type = "Public"
  }
}

# ECS Cluster for Container Orchestration
resource "aws_ecs_cluster" "patient_care_cluster" {
  name = "patient-care-cluster-${var.environment}"

  configuration {
    execute_command_configuration {
      kms_key_id = aws_kms_key.patient_care_key.arn
      logging    = "OVERRIDE"

      log_configuration {
        cloud_watch_encryption_enabled = true
        cloud_watch_log_group_name     = aws_cloudwatch_log_group.ecs_logs.name
      }
    }
  }

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name = "patient-care-ecs-cluster"
  }
}

# DocumentDB (MongoDB-compatible) for HIPAA compliance
resource "aws_docdb_cluster" "patient_care_docdb" {
  cluster_identifier      = "patient-care-docdb-${var.environment}"
  engine                  = "docdb"
  master_username         = var.docdb_master_username
  master_password         = var.docdb_master_password
  backup_retention_period = 35
  preferred_backup_window = "07:00-09:00"
  skip_final_snapshot     = false
  final_snapshot_identifier = "patient-care-docdb-final-snapshot-${formatdate("YYYY-MM-DD-hhmm", timestamp())}"
  
  # HIPAA Requirements
  storage_encrypted   = true
  kms_key_id         = aws_kms_key.patient_care_key.arn
  deletion_protection = true
  
  db_subnet_group_name   = aws_docdb_subnet_group.patient_care_docdb_subnet_group.name
  vpc_security_group_ids = [aws_security_group.docdb_sg.id]

  enabled_cloudwatch_logs_exports = ["audit", "profiler"]

  tags = {
    Name = "patient-care-docdb"
  }
}

# ElastiCache Redis for Session Management
resource "aws_elasticache_replication_group" "patient_care_redis" {
  replication_group_id         = "patient-care-redis-${var.environment}"
  description                  = "Patient Care Redis cluster"
  
  node_type                    = "cache.r6g.large"
  port                         = 6379
  parameter_group_name         = "default.redis7"
  
  num_cache_clusters           = 2
  automatic_failover_enabled   = true
  multi_az_enabled            = true
  
  # HIPAA Requirements
  at_rest_encryption_enabled   = true
  transit_encryption_enabled   = true
  auth_token                   = var.redis_auth_token
  kms_key_id                   = aws_kms_key.patient_care_key.arn
  
  subnet_group_name            = aws_elasticache_subnet_group.patient_care_redis_subnet_group.name
  security_group_ids           = [aws_security_group.redis_sg.id]
  
  log_delivery_configuration {
    destination      = aws_cloudwatch_log_group.redis_logs.name
    destination_type = "cloudwatch-logs"
    log_format       = "text"
    log_type         = "slow-log"
  }

  tags = {
    Name = "patient-care-redis"
  }
}

# KMS Key for Encryption
resource "aws_kms_key" "patient_care_key" {
  description             = "KMS key for Patient Care Platform HIPAA encryption"
  deletion_window_in_days = 30
  enable_key_rotation     = true

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "Enable IAM User Permissions"
        Effect = "Allow"
        Principal = {
          AWS = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:root"
        }
        Action   = "kms:*"
        Resource = "*"
      }
    ]
  })

  tags = {
    Name = "patient-care-kms-key"
  }
}

# Application Load Balancer
resource "aws_lb" "patient_care_alb" {
  name               = "patient-care-alb-${var.environment}"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = aws_subnet.public_subnets[*].id

  enable_deletion_protection = true
  enable_http2              = true
  drop_invalid_header_fields = true

  access_logs {
    bucket  = aws_s3_bucket.patient_care_logs.bucket
    prefix  = "alb-logs"
    enabled = true
  }

  tags = {
    Name = "patient-care-alb"
  }
}

# S3 Bucket for PHI Storage (HIPAA Compliant)
resource "aws_s3_bucket" "patient_care_phi" {
  bucket = "patient-care-phi-${var.environment}-${random_id.bucket_suffix.hex}"

  tags = {
    Name        = "patient-care-phi-storage"
    DataType    = "PHI"
    Compliance  = "HIPAA"
  }
}

resource "aws_s3_bucket_encryption_configuration" "patient_care_phi_encryption" {
  bucket = aws_s3_bucket.patient_care_phi.id

  rule {
    apply_server_side_encryption_by_default {
      kms_master_key_id = aws_kms_key.patient_care_key.arn
      sse_algorithm     = "aws:kms"
    }
    bucket_key_enabled = true
  }
}

resource "aws_s3_bucket_versioning" "patient_care_phi_versioning" {
  bucket = aws_s3_bucket.patient_care_phi.id
  versioning_configuration {
    status = "Enabled"
  }
}

# WAF for Application Security
resource "aws_wafv2_web_acl" "patient_care_waf" {
  name  = "patient-care-waf-${var.environment}"
  scope = "REGIONAL"

  default_action {
    allow {}
  }

  # OWASP Top 10 Protection
  rule {
    name     = "AWS-AWSManagedRulesCommonRuleSet"
    priority = 1

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesCommonRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "CommonRuleSetMetric"
      sampled_requests_enabled   = true
    }
  }

  # SQL Injection Protection
  rule {
    name     = "AWS-AWSManagedRulesSQLiRuleSet"
    priority = 2

    override_action {
      none {}
    }

    statement {
      managed_rule_group_statement {
        name        = "AWSManagedRulesSQLiRuleSet"
        vendor_name = "AWS"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "SQLiRuleSetMetric"
      sampled_requests_enabled   = true
    }
  }

  tags = {
    Name = "patient-care-waf"
  }
}
```

### Security Groups Configuration
```yaml
# Security Group for Application Load Balancer
resource "aws_security_group" "alb_sg" {
  name_prefix = "patient-care-alb-sg-"
  vpc_id      = aws_vpc.patient_care_vpc.id

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP (redirect to HTTPS)"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "patient-care-alb-sg"
  }
}

# Security Group for ECS Tasks
resource "aws_security_group" "ecs_sg" {
  name_prefix = "patient-care-ecs-sg-"
  vpc_id      = aws_vpc.patient_care_vpc.id

  ingress {
    description     = "HTTP from ALB"
    from_port       = 8000
    to_port         = 8000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id]
  }

  ingress {
    description     = "Frontend from ALB"
    from_port       = 3000
    to_port         = 3000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "patient-care-ecs-sg"
  }
}

# Security Group for DocumentDB
resource "aws_security_group" "docdb_sg" {
  name_prefix = "patient-care-docdb-sg-"
  vpc_id      = aws_vpc.patient_care_vpc.id

  ingress {
    description     = "DocumentDB from ECS"
    from_port       = 27017
    to_port         = 27017
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs_sg.id]
  }

  tags = {
    Name = "patient-care-docdb-sg"
  }
}

# Security Group for Redis
resource "aws_security_group" "redis_sg" {
  name_prefix = "patient-care-redis-sg-"
  vpc_id      = aws_vpc.patient_care_vpc.id

  ingress {
    description     = "Redis from ECS"
    from_port       = 6379
    to_port         = 6379
    protocol        = "tcp"
    security_groups = [aws_security_group.ecs_sg.id]
  }

  tags = {
    Name = "patient-care-redis-sg"
  }
}
```

## Monitoring & Observability

### CloudWatch Configuration
```yaml
# CloudWatch Log Groups
resource "aws_cloudwatch_log_group" "ecs_logs" {
  name              = "/aws/ecs/patient-care-${var.environment}"
  retention_in_days = 30
  kms_key_id        = aws_kms_key.patient_care_key.arn

  tags = {
    Name = "patient-care-ecs-logs"
  }
}

resource "aws_cloudwatch_log_group" "application_logs" {
  name              = "/aws/application/patient-care-${var.environment}"
  retention_in_days = 365  # HIPAA requirement: 6+ years
  kms_key_id        = aws_kms_key.patient_care_key.arn

  tags = {
    Name = "patient-care-application-logs"
  }
}

# CloudWatch Alarms
resource "aws_cloudwatch_metric_alarm" "high_cpu" {
  alarm_name          = "patient-care-high-cpu-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/ECS"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors ECS CPU utilization"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    ServiceName = aws_ecs_service.patient_care_backend.name
    ClusterName = aws_ecs_cluster.patient_care_cluster.name
  }

  tags = {
    Name = "patient-care-cpu-alarm"
  }
}

resource "aws_cloudwatch_metric_alarm" "database_connections" {
  alarm_name          = "patient-care-db-connections-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "DatabaseConnections"
  namespace           = "AWS/DocDB"
  period              = "300"
  statistic           = "Average"
  threshold           = "80"
  alarm_description   = "This metric monitors DocumentDB connections"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    DBClusterIdentifier = aws_docdb_cluster.patient_care_docdb.cluster_identifier
  }

  tags = {
    Name = "patient-care-db-connections-alarm"
  }
}
```

## Last Updated: June 2025
## Maintained by: AK Code Lab Development Team