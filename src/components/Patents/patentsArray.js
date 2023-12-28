const patentsArray = [
    {
        title: 'Optimizing Workflow Movement Through Device Ecosystem Boundaries',
        patentId: '11669525',
        dateIssued: 'Jun 6, 2023',
        description: 'Techniques described herein relate to a method for ­optimizing workflow execution. The method may include receiving an event notification at a service controller, wherein the event notification is associated with a workflow deployed in a device ecosystem; performing, based on receiving the event notification, a workflow reconfiguration action com­prising; providing a first workflow portion to a first platform controller in a first domain in the device ecosystem; trans­mitting a workflow reconfiguration action notification to a second platform controller in a second domain of the device ecosystem; identifying, by the second platform controller and in response to receiving the workflow reconfiguration action notification, a data transfer optimization action asso­ciated with data to be transmitted from the second domain to the first domain and used during execution of the first workflow portion; and transmitting the data from the second domain to the first domain using the data transfer optimi­zation action.',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Continuous Integration and Continuous Delivery Pipeline Data for Workflow Deployment',
        patentId: '11669315',
        dateIssued: 'Jun 6, 2023',
        description: 'Techniques described herein relate to a method for using pipeline data for deploying workflows. The method may include determining that a pipeline testing trigger occurred for a workflow; decomposing a pipeline testing manifest of the workflow; generating a testing execution plan using the decomposed workflow; adding instrumentation to the testing execution plan; determining that the instrumented testing execution plan is valid; deploying computing devices within a CI/CD pipeline ecosystem for performing the instrumented testing execution plan; capturing deployment logs; initiating telemetry capture; executing pipeline testing of the work­ flow based on the instrumented testing execution plan; generating a pipeline deployment information set based on the pipeline testing; and providing the pipeline deployment information set to an orchestrator of a production device ecosystem.',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Multi-Level Workflow Scheduling Using Meta-Heuristic and Heuristic Algorithms',
        patentId: '11630753',
        dateIssued: 'Apr 18, 2023',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, by a global orchestrator of a device ecosystem, a request to execute a workflow; decomposing, by the global orchestra­ tor, the workflow into a plurality of workflow portions; executing, by the global orchestrator, a metaheuristic algo­rithm to generate a result comprising a plurality of domains of the device ecosystem in which to execute the plurality of workflow portions; and providing, by the global orchestra­ tor, the plurality of workflow portions to respective local orchestrators of the plurality of domains based on the result of executing the metaheuristic algorithm.',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Provisioning Workflows Using Subgraph Similarity',
        patentId: '11627090',
        dateIssued: 'Apr 11, 2023',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, at a service controller of a federated controller, a request to deploy a workflow in a device ecosystem; decomposing, by the service controller, the workflow into a plurality of workflow portions; performing, by the service controller, a search in a capabilities and constraints data construct to identify a domain in which to perform a workflow portion of the plurality of workflow portions; providing the workflow portion and workflow constraints to a platform controller in the domain; performing, by the platform controller, a sub­ graph similarity check to determine that a previously executed workflow portion was successfully executed on a subgraph in the domain; provisioning, by the platform controller, a set of devices in the domain based on the subgraph; and executing the workflow portion in the domain.',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Application of Data Services Based on Services Policies',
        patentId: '11516109',
        dateIssued: 'Nov 29, 2022',
        description: 'Techniques described herein relate to a method for perform­ing data services. The method may include receiving, from a monitor agent, a global name and metadata corresponding to data written to a data structure of storage of a data host; performing a services assessment using the global name, the metadata, and a data service policy rule to obtain at least one data service to perform on the data; and performing the at least one data service based on the services assessment.',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Provisioning Workflows with Data Management Services',
        patentId: '11461211',
        dateIssued: 'Oct 4, 2022',
        description: 'Techniques described herein relate to a method for deploy­ing workflows with data management services. The method may include receiving, at a service controller of a federated controller, a request to deploy a workflow in a device ecosystem; decomposing the workflow into a plurality of workflow portions; assigning, based on identifying a first platform controller, a first workflow portion to the first platform controller; assigning, based on identifying a second platform controller, a second workflow portion to the second platform controller; assigning, based on the plurality of workflow portions and a capabilities and constraints data construct, data management services to the first platform controller and the second platform controller; and initiating performance of the first workflow portion by the first plat­ form controller and the second workflow portion by the second platform controller, in which performing the first workflow portion and the second workflow portion includes performing the data management services.',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Creating and managing dynamic workflows based on occupancy',
        patentId: '11463315',
        dateIssued: 'Oct 4, 2022',
        description: 'Techniques described herein relate to a method for deploy­ing workflows. The method may include receiving, by a platform controller of a domain, a workflow portion and workflow constraints from a service controller of a federated controller, provisioning, by the platform controller, a set of devices in the domain to the workflow portion, executing the workflow portion in the domain using the set of devices, monitoring the executing of the workflow portion to deter­ mine an occupancy of the workflow portion, making a determination that the occupancy of the workflow portion exceeds an available capacity of the domain, providing, based on the determination, the occupancy to the service controller, and in response to the occupancy, performing, by the service controller, a remediation action.',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Systems and Methods for Hypergraph Edge Resource Demand Load Representation',
        patentId: '18/366507',
        dateIssued: 'Aug 7, 2023',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Systems and Methods for Hypergraph Edge Resource Demand Knowledge Management',
        patentId: '18/366520',
        dateIssued: 'Aug 7, 2023',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Systems and Methods for Edge System Resource Capacity Dynamic Policy Planning Framework',
        patentId: '18/366490',
        dateIssued: 'Aug 7, 2023',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Systems and Methods for Edge Resource Demand Load Estimation',
        patentId: '18/366549',
        dateIssued: 'Aug 7, 2023',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Systems and Methods for Edge Resource Demand Load Scheduling',
        patentId: '18/366555',
        dateIssued: 'Aug 7, 2023',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Systems and Methods for Edge Resource Demand Load Estimation',
        patentId: '18/366538',
        dateIssued: 'Aug 7, 2023',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Edge Domain-Specific Accelerator Virtualization and Scheduling',
        patentId: '18/355351',
        dateIssued: 'Jul 19, 2023',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Device Authentication for Onboarding',
        patentId: '18/352359',
        dateIssued: 'Jul 14, 2023',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Device Onboarding on Secure Networks',
        patentId: '18/352007',
        dateIssued: 'Jul 13, 2023',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Edge Resource Utilization',
        patentId: '63/450237',
        dateIssued: 'Mar 6, 2023',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Data Discovery and Classification in Information Processing System Environment',
        patentId: '18/114195',
        dateIssued: 'Feb 24, 2023',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Parametric Meta-Learning Decisioning in Information Processing System Environment',
        patentId: '18/114197',
        dateIssued: 'Feb 24, 2023',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Feature Extraction and Selection in Information Processing System Environment',
        patentId: '18/114196',
        dateIssued: 'Feb 24, 2023',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Service Impairment Isolation in Information Processing System Environment',
        patentId: '18/113162',
        dateIssued: 'Feb 23, 2023',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Predictive Anomaly Detection and Fault Isolation in Information Processing System Environment',
        patentId: '18/112256',
        dateIssued: 'Feb 21, 2023',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Managing a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722147',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardMediumBlue',
    },
    {
        title: 'Method and System for Provisioning Applications in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722066',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Performing Device Level Management in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722058',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Method and System for Performing Domain Level Scheduling of an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722042',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Method and System for Managing Resource Buffers in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722121',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Method and System for Provisioning an Application in a Distributed Multi-Tiered Computing Environment Using Case Based Reasoning',
        patentId: '17/722136',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Method and System for Performing Service Remediation in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722087',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Method and System for Performing Domain Level Scheduling of an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/721987',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Method and System for Performing Domain Level Scheduling of an Application in a Distributed Multi-Tiered Computing Environment Using Heuristic Scheduling',
        patentId: '17/722007',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Processing a Manifest to Provision an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722071',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Dynamic Selection of Policy Priorities for Provisioning an Application in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/721964',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Performing Root Cause Analysis Associated with Service Impairments in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722093',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Method and System for Performing Anomaly Detection in a Distributed Multi-Tiered Computing Environment',
        patentId: '17/722109',
        dateIssued: 'Apr 15, 2022',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Secure Base Activation Image for Edge Day Zero Secure Infrastructure Provisioning',
        patentId: '17/454166',
        dateIssued: 'Nov 9, 2021',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Edge Day Zero Secure Infrastructure Identification and Attestation',
        patentId: '17/454158',
        dateIssued: 'Nov 9, 2021',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Edge Day Zero Secure Infrastructure Provisioning with Autonomic Methods',
        patentId: '17/454170',
        dateIssued: 'Nov 9, 2021',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Enhanced Drift Remediation with Causal Methods and Online Model Modification',
        patentId: '17/507986',
        dateIssued: 'Oct 22, 2021',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Unsupervised Data Characterization Utilizing Drift',
        patentId: '17/508043',
        dateIssued: 'Oct 22, 2021',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Multi-Observer, Consensus Based Ground Truth',
        patentId: '17/508079',
        dateIssued: 'Oct 22, 2021',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Model Prediction Confidence Utilizing Drift',
        patentId: '17/508114',
        dateIssued: 'Oct 22, 2021',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Automated Identification of Training Datasets',
        patentId: '17/508017',
        dateIssued: 'Oct 21, 2021',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'System and Methods for Transparent Edge Application Dataset Management and Control',
        patentId: '17/506339',
        dateIssued: 'Oct 20, 2021',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Method and System for Automated Dataset Placement for Application Execution',
        patentId: '17/460487',
        dateIssued: 'Aug 30, 2021',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Data Management Techniques Using Distributed Policy Agent',
        patentId: '17/386359',
        dateIssued: 'Jul 27, 2021',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Autonomic Detection and Correction of Artificial Intelligence Model Drift',
        patentId: '17/378844',
        dateIssued: 'Jul 19, 2021',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Method and System for Provisioning Workflows with Proactive Data Transformation',
        patentId: '17/236762',
        dateIssued: 'Apr 21, 2021',
        cardStyle: 'patentCardLightBlue'
    },
    {
        title: 'Method and System for Managing Elastic Accelerator Resource Pools with a Shared Storage',
        patentId: '17/236708',
        dateIssued: 'Apr 21, 2021',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Provisioning Workflows with Dynamic Accelerator Pools',
        patentId: '17/236733',
        dateIssued: 'Apr 21, 2021',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Creating and Managing Execution of Workflow Portions Using Chaos Action Sets',
        patentId: '17/236725',
        dateIssued: 'Apr 21, 2021',
        cardStyle: 'patentCardMediumBlue'
    },
    {
        title: 'Method and System for Provisioning Workflows Based on Locality',
        patentId: '17/236754',
        dateIssued: 'Apr 21, 2021',
        cardStyle: 'patentCardDarkBlue'
    },
    {
        title: 'Generating and Managing Workflow Fingerprints Based on Provisioning of Devices in a Device Ecosystem',
        patentId: '17/236717',
        dateIssued: 'Apr 21, 2021',
        cardStyle: 'patentCardDarkBlue'
    },
]

export default patentsArray;