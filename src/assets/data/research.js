/*
The order in the list will determine the order of the project

"researchTitle" is the name of the project
"researchLead" is the leader of the project (likely one of the prinicipal investigators
"researchImage" is the link to the researchImage
"researchDescription" is the description of the project
"researchLinks" is the link to the publications
    Note, the publication link will be used to match with the publication information from the publication.js
*/
export const research = 
[
    {
        "researchTitle": "Plasma proteomics",
        "researchLead": "Maria Pernemalm",
        "researchImage": "mariaresearchpicture.jpg",
        "researchDescription": "<ul style='padding-left:20px'><li style='list-style-type:disc'>Goal: Develop an accurate and sensitive pipeline for mass spectrometry-based analysis of the plasma proteome.</li><li style='list-style-type:disc'>Challenge: Difficulty in detecting protein biomarkers in plasma due to skewed protein concentration distribution and high patient-to-patient variability.</li><li style='list-style-type:disc'>Methodology: Developing HiRIEF-based methodologies for global proteome analysis and targeted MRM-analysis of the plasma proteome.</li><li style='list-style-type:disc'>Incorporating Advances: Utilizing proteogenomics field advancements, including data on single amino acid variants in analyses.</li><li style='list-style-type:disc'>Applications:<ul style='padding-left:20px'><li style='list-style-type:disc'>Discovering diagnostic, prognostic, and predictive biomarkers in plasma.<li>Analyzing the protein corona of nanoparticles.</li><li style='list-style-type:disc'>Quantifying proteins from immunocapture analysis.</li><li style='list-style-type:disc'>Analyzing biological fluids such as pleural effusion, cystic fluid, and cerebrospinal fluid.</li></ul></ul>",
        "researchLinks": ["https://doi.org/10.1002/1878-0261.13355","https://doi.org/10.1186/s12931-023-02364-y","https://doi.org/10.3389/fendo.2022.971313"]
    },
    {
        "researchTitle": "Lung cancer",
        "researchLead": "Lukas Orre",
        "researchImage": "lukasresearchpicture.jpeg",
        "researchDescription": "<ul style='padding-left:20px'><li style='list-style-type:disc'>Group's Focus<ul style='padding-left:20px'><li style='list-style-type:disc'>Development of new methods for precision medicine in lung cancer aiming for improved strategies for patient stratification and treatment selection.</li><li style='list-style-type:disc'>Use MS-based proteomics to study non-small cell lung cancer (NSCLC) subtypes, and to identify predictive biomarkers and new strategies for cancer therapy.</li></ul><li style='list-style-type:disc'>Activities</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Apply in-depth clinical proteomics methods on NSCLC sample cohorts for increased understanding of molecular phenotypes in lung cancer.</li><li style='list-style-type:disc'>Investigate determinants of drug response or resistance in model systems to suggest biomarkers and optimal drug combinations for improved lung cancer therapy.</li><li style='list-style-type:disc'>Functional Proteomics:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Proteins in a cell determine its phenotype, including whether it is cancerous, what drives the cancer growth and survival, and its sensitivity to specific treatments.</li></ul></li><li style='list-style-type:disc'>We develop and apply proteomics methods to describe the functional state of proteins, including information about protein activity (e.g., phosphorylation), protein complex formation, and protein subcellular location.</li></ul><li style='list-style-type:disc'>Overall goal</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Increased understanding of the molecular phenotype of cancer cells will help understand why cells from different tumors respond differently to cancer drugs.</li><li style='list-style-type:disc'>With this knowledge we can predict the response to therapy in individual patients and identify personalized combinations of cancer therapies for each patient.</li><li style='list-style-type:disc'>Tailor the best therapy for each lung cancer patient based on molecular understanding and personalized treatment approaches.</ul></li></ul>",
        "researchLinks": ["https://doi.org/10.1038/s43018-021-00259-9","https://doi.org/10.1016/j.molcel.2018.11.035","https://doi.org/10.1074%2Fmcp.RA120.002036"]
    },
    {
        "researchTitle": "Breast cancer",
        "researchLead": "Henrik Johansson",
        "researchImage": "henrikresearchpicture.jpg",
        "researchDescription": "<ul style='padding-left:20px'><li style='list-style-type:disc'>Group's focus</li><ul style='padding-left:20px'><li style='list-style-type:disc'>to acquire comprehensive knowledge of multi-omics and phenotypic quantitative proteins related to breast cancer for precise proteome medicine. We utilize mass spectrometry-based proteomics techniques to analyse clinical cohorts, unravel basic cancer biology, pinpoint breast cancer drivers, therapeutic targets, and response biomarkers.</li><li style='list-style-type:disc'>ancer biology, pinpoint breast cancer drivers, therapeutic targets, and response biomarkers. Our focus is on immune evasion mechanisms and understanding how genomic alterations influence the proteome phenotype and identifying tumour-specific antigens (TSA, neoantigens).</li></ul><li style='list-style-type:disc'>Activities</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Developing mass spectrometry (MS) methods to achieve in-depth and reliable proteome coverage for biomarker discovery, validation, and novel protein species identification</li></ul><li style='list-style-type:disc'>Context</li><ul style='padding-left:20px'><li style='list-style-type:disc'>TNBC lacks ESR1, PGR, and ERBB2 markers, representing a diverse group of tumours with unmet needs due to their aggressive nature and limited treatment options. Our research investigate the phenotypic proteome of TNBC using MS-based proteomics to enhance our understanding of TNBC biology, identify subtypes, and correlate them with treatment responses for precision medicine.</li><li style='list-style-type:disc'>HER2-positive breast cancer is characterized by HER2 protein overexpression and aggressive behaviour. While anti-HER2 small molecules and antibodies have improved outcomes, less than half of patients respond to therapy, highlighting the necessity to comprehend the cancer biology underlying resistance and develop response biomarkers.</li></ul></ul>",
        "researchLinks": ["https://doi.org/10.1038/s41467-024-47932-y","https://doi.org/10.1073/pnas.2100050118","https://doi.org/10.7554/elife.57894","https://doi.org/10.1038/s41467-019-09018-y"]
    },
    {
        "researchTitle": "Proteomics methods",
        "researchLead": "Rui Branca",
        "researchImage": "ruiresearchpicture.png",
        "researchDescription": "<ul style='padding-left:20px'><li style='list-style-type:disc'>Group's Focus</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Develop and apply MS-based methods to enhance human proteome analysis.</ul></li><li style='list-style-type:disc'>Activities</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Prefractionation</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Application of high-resolution peptide isoelectric focusing (HiRIEF) method for reproducible fractionation before MS-analysis.</li><li style='list-style-type:disc'>Improves analytical depth, increases peptide and protein sequence coverage, and enhances overlap between samples.</li><li style='list-style-type:disc'>Provides additional data point: peptide isoelectric point, enabling novel applications, notably in proteogenomics.</li></ul><li style='list-style-type:disc'>Proteogenomics</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Applied MS-data in an unbiased genome-wide search for protein coding DNA sequences in the human genome.</li><li style='list-style-type:disc'>One important aim is to discover non-canonical/unconventional neoantigens, i.e. protein sequences exclusively or overly expressed by cancer cells.</li></ul><li style='list-style-type:disc'>Immunopeptidomics</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Analysis of MHC peptide repertoire in cancer samples.</li><li style='list-style-type:disc'>One of the main aims is to identify non-canonical/unconventional neoantigens or point mutation derived neoantigens.</li></ul><li style='list-style-type:disc'>Single cell and low cell number Proteomics</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Developing methods to enable deep Proteomics analysis of FACS sorted cells or samples from LCM (Laser capture microdissection).</li></ul></ul><li style='list-style-type:disc'>Overall Goal</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Continuous improvement and innovation in MS-based methods and comprehensive and accurate human proteome analysis.</li></ul></ul>",
        "researchLinks": ["https://doi.org/10.1038/s41467-018-03311-y","https://doi.org/10.1038/nmeth.2732","https://doi.org/10.1093/brain/awx352","https://doi.org/10.7554/eLife.71156","https://doi.org/10.1038/s41467-023-42668-7"]
    },
    {
        "researchTitle": "Childhood cancer",
        "researchLead": "Rozbeh Jafari",
        "researchImage": "rozbehresearchpicture.png",
        "researchDescription": "<ul style='padding-left:20px'><li style='list-style-type:disc'>Team's Overall Aim:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Use mass spectrometry-based proteomics to enhance biological understanding of Acute Lymphoblastic Leukemia (ALL) and Neuroblastoma.</li>Define clinical subtypes, evaluate drug interactions, and identify biomarkers for targeted therapies, with a focus on improving personalized therapy.</li></ul><li style='list-style-type:disc'>Childhood ALL Significance:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Childhood ALL is the most common pediatric cancer, representing 75-80% of all childhood cancer cases.</li><li style='list-style-type:disc'>While many patients achieve complete remission, relapsed cases have a poor prognosis.</li><li style='list-style-type:disc'>Current broad cytotoxic therapy for relapsed ALL has significant resistance development and long-term side effects.</li></ul><li style='list-style-type:disc'>Treatment Challenges:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Relapsed ALL treatment is more intense, significantly impacting the quality of life.</li><li style='list-style-type:disc'>The need for novel predictive biomarkers and targeted drug therapeutics is essential.</li></ul><li style='list-style-type:disc'>Current Focus:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Employing Thermal Proteome Profiling and in-depth proteogenomics.</li><li style='list-style-type:disc'>Aiming to identify novel predictive, resistant, and therapeutic biomarkers for more effective personalized therapy in pediatric ALL.</li></ul><li style='list-style-type:disc'>Significance of Biomarkers:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Seeking biomarkers to improve predictions of treatment response and resistance.</li><li style='list-style-type:disc'>Striving to minimize the side effects of broad cytotoxic therapy and enhance targeted drug therapeutics.</li></ul><li style='list-style-type:disc'>Long-Term Impact:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>The ultimate goal is to improve the overall efficacy and quality of life for pediatric ALL patients through innovative proteomics approaches and personalized therapeutic strategies.</li></ul></ul>",
        "researchLinks": ["https://doi.org/10.1038/s41589-023-01284-8","https://doi.org/10.1038/s41598-024-54400-6","https://doi.org/10.1038/s41467-022-29224-5","https://doi.org/10.1038/s41467-022-33385-8"]
    },
    {
        "researchTitle": "Molecular Tumor Board Portal",
        "researchLead": "David Tamborero",
        "researchImage": "logo-portrait-karolinska-mtb-dark.svg",
        "researchDescription": "<ul style='padding-left:20px'><li style='list-style-type:disc'>Objective:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Support clinical decision-making through the interpretation of omics data from patient tumors.</li><li style='list-style-type:disc'>Contribute to precision oncology by accurately discovering and interpreting tumor alterations for diagnosis, prognosis, and therapy selection.</li></ul><li style='list-style-type:disc'>Challenges:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Current knowledge on tumor alterations is scattered across disparate resources with varying data models.</li><li style='list-style-type:disc'>Many observed tumor variants have unknown significance, requiring additional computational tools for relevance estimation.</li></ul><li style='list-style-type:disc'>Solution:</li><ul style='padding-left:20px'><li>Developed the Molecular Tumor Board (MTB) portal.</li><li style='list-style-type:disc'>Acts as a platform for annotating and distributing tumor omics data.</li><li style='list-style-type:disc'>Utilizes state-of-the-art knowledge bases and bioinformatics tools to interpret biological and clinical significance based on distinct levels of evidence.</li></ul><li style='list-style-type:disc'>Benefits of MTB Portal:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Ensures clinical decisions (e.g., inclusion in clinical trials, off-label use of anti-cancer drugs, genomic counseling) rely on the most updated and comprehensive knowledge available.</li><li style='list-style-type:disc'>Establishes a centralized framework for annotating and collecting results, contributing to the generation of novel knowledge for future patient decisions.</li></ul><li style='list-style-type:disc'>Current Usage:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Utilized by the seven leading European oncology centers forming the Cancer Core Europe.</li><li style='list-style-type:disc'>Currently supports genomic data analyses.</li></ul><li style='list-style-type:disc'>Future Goals:</li><ul style='padding-left:20px'><li style='list-style-type:disc'>Aim to implement interpretation of other omics data types, including transcriptomics, proteomics, and ex-vivo drug testing results.</li><li style='list-style-type:disc'>Continuously enhance the capabilities of the MTB portal to provide comprehensive support for clinical decision-making in precision oncology.</li></ul></ul>",
        "researchLinks": ["https://doi.org/10.1038/s41591-020-0969-2","https://doi.org/10.1038/s43018-022-00332-x"]
    }
]