import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import AdvancedSearch from './AdvancedSearch';
import SearchMain from './SearchMain';
import Bookmarks from './Bookmarks';

const searchData = [
    {
        id: 1,
        name: 'Environmental Fluid Dynamics Code (EFDC)',
        acronym: 'EFDC',
        link: 'https://www.epa.gov/exposure-assessment-models/environment-fluid-dynamics-code-efdc-download-page',
        shortDescription:
            'Environmental Fluid Dynamics Code (EFDC) is a multi-functional surface water modeling system, which includes hydrodynamic, sediment-contaminant, and eutrophication components.',
        longDescription:
            'The EFDC model also allows for drying and wetting in shallow areas by a mass conservative scheme. A number of alternatives are in place in the model to simulate general discharge control structures such as weirs, spillways and culverts. For nearshore surf zone simulation, the EFDC model can incorporate externally specified radiation stresses due to high frequency surface gravity waves. The EFDC model solves the three-dimensional, vertically hydrostatic, free surface, turbulent averaged equations of motions for a variable density fluid. The model uses a stretched or sigma vertical coordinate and Cartesian or curvilinear, orthogonal horizontal coordinates.',
        keywords: [
            { type: 'primaryAudience', title: 'Academia/Consultants' },
            { type: 'secondaryAudience', title: 'Government' },
            { type: 'secondaryAudience', title: 'Private Sector' },
            { type: 'secondaryAudience', title: 'Hydrologists' },
            { type: 'environmentalTopicArea', title: 'Ecosystems' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Desktop' },
            { type: 'scientificApplicationType', title: 'Model' }
        ],
        disclaimer:
            'Environmental Fluid Dynamics Code is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'N/A',
            number: 'N/A',
            email: 'N/A'
        }
    },
    {
        id: 2,
        name: 'Natural Attenuation Decision Support System - BIOSCREEN',
        acronym: 'BIOSCREEN',
        link: 'https://www.epa.gov/water-research/bioscreen-natural-attenuation-decision-support-system',
        shortDescription:
            'The model is designed to simulate biodegradation by both aerobic and anaerobic reactions. This screening tool will allow ground water remediation managers to identify sites where natural attenuation is most likely to be protective of human health and the environment.',
        longDescription:
            'The model is designed to simulate biodegradation by both aerobic and anaerobic reactions. This screening tool will allow ground water remediation managers to identify sites where natural attenuation is most likely to be protective of human health and the environment. It will also allow regulators to carry out an independent assessment of treatability studies and remedial investigations that propose the use of natural attenuation.',
        keywords: [
            { type: 'primaryAudience', title: 'General Public' },
            {
                type: 'secondaryAudience',
                title: 'Ground water remediation managers'
            },
            { type: 'environmentalTopicArea', title: 'Chemicals & Toxics' },
            { type: 'environmentalTopicArea', title: 'Land' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Desktop' },
            { type: 'scientificApplicationType', title: 'Model' }
        ],
        disclaimer:
            'Natural Attenuation Decision Support System - BIOSCREEN is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'David Burden',
            number: '580-436-8606',
            email: 'Burden.David@epa.gov'
        }
    },
    {
        id: 3,
        name: 'Ecotoxicology Database (ECOTOX)',
        acronym: 'ECOTOX',
        link: 'https://cfpub.epa.gov/ecotox/',
        shortDescription:
            'For over 30 years, ECOTOX has curated ecologically-relevant toxicity data in support of the US EPA mission in the protection and management of environmental resources. Data are curated from the scientific literature after an exhaustive search protocol for single-chemical toxicity data for ecologically relevant species.',
        longDescription:
            'For over 30 years, ECOTOX has curated ecologically-relevant toxicity data in support of the US EPA mission in the protection and management of environmental resources. Data are curated from the scientific literature after an exhaustive search protocol for single-chemical toxicity data for ecologically relevant species. ECOTOX includes more than one million test records covering 13,455 aquatic and terrestrial species and 12,272 chemicals. New data records are added quarterly to the public website. The primary source of ECOTOX data is peer-reviewed literature, with test results identified through comprehensive searches of the open literature. ECOTOX also includes third-party data collections from the EPA Program Offices, the United States Geologic Survey, Russia, and OECD member nations. The latter sources summarize research published in non-English journals and/or not available in the open literature. Pertinent information on species, chemicals, test methods, and toxicity results are included in the Knowledgebase. ECOTOX is used broadly within EPA to meet a variety of critical regulatory and research needs and is also used by stakeholders and other interested parties outside the Agency. The ECOTOX Knowledgebase is routinely used to support the assessment, management and research of chemicals in the environment. ECOTOX has been used as the source of toxicity data for the Office of Water’s (OW) chemical Ambient Water Quality Criteria used to protect our nation’s water resources and manage effluents. Scientists from OW routinely request data to update current criteria and develop standards for new chemicals. In turn, States, Tribes, and EPA Regions utilize the data to develop site-specific criteria or interpret findings from monitoring data for chemicals without established criteria. The ECOTOX Knowledgebase is used for all ecological assessments by the Office of Chemical Safety and Pollution Prevention’s Office of Pesticides, Ecological Fate and Effects Division in the registration of new pesticides and the re-registration of chemicals currently in commerce. Updated data from chemical studies that are added to ECOTOX are used to set effect thresholds in water and soil to establish chemical use recommendations across the US. The ECOTOX Knowledgebase is also being used by the Office of Chemical Safety and Pollution Prevention’s Office of Pollution Prevention and Toxic Substances to meet objectives of the Frank Lautenberg Chemical Safety for the 21st Century Act. The ECOTOX Knowledgebase is the source for the environmental toxicity data for chemical review. Information in the ECOTOX Knowledgebase is also used for collecting effects data for site assessments and development of site-specific remediation goals for Superfund hazardous waste sites and Resource Conservation and Recovery Act corrective actions in all 10 of the US EPA Regions. ',
        keywords: [
            { type: 'primaryAudience', title: 'Government: EPA' },
            {
                type: 'secondaryAudience',
                title: 'NGO/Association/Foundation'
            },
            {
                type: 'secondaryAudience',
                title: 'Academia'
            },
            {
                type: 'secondaryAudience',
                title: 'Ecologists'
            },
            { type: 'environmentalTopicArea', title: 'Chemicals & Toxics' },
            { type: 'environmentalTopicArea', title: 'Ecosystems' },
            { type: 'platform', title: 'Browser-based' },
            { type: 'scientificApplicationType', title: 'Database' }
        ],
        disclaimer:
            'Ecotoxicology Database is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'Colleen Elonen',
            number: '218-529-5195',
            email: 'Elonen.Colleen@epa.gov'
        }
    },
    {
        id: 4,
        name: 'Storm Water Management Model (SWMM)',
        acronym: 'SWMM',
        link: 'https://www.epa.gov/water-research/storm-water-management-model-swmm',
        shortDescription:
            'A comprehensive computer model for analysis of quantity and quality problems associated with urban runoff. SWMM is a hydrology and hydraulics model that aids in the design of green and grey stormwater infrastructure alternatives.',
        longDescription: `EPA's Stormwater Management Model (SWMM) is used throughout the world for planning, analysis, and design related to stormwater runoff, combined and sanitary sewers, and other drainage systems. It can be used to evaluate gray infrastructure stormwater control strategies, such as pipes and storm drains, and is a useful tool for creating cost-effective green/gray hybrid stormwater control solutions. SWMM was developed to help support local, state, and national stormwater management objectives to reduce runoff through infiltration and retention, and help to reduce discharges that cause impairment of our Nation’s waterbodies. `,
        keywords: [
            { type: 'primaryAudience', title: 'Government: EPA' },
            {
                type: 'secondaryAudience',
                title: 'NGO/Association/Foundation'
            },
            {
                type: 'secondaryAudience',
                title: 'Academia'
            },
            {
                type: 'secondaryAudience',
                title: 'Private Sector'
            },
            { type: 'environmentalTopicArea', title: 'Land' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Desktop' },
            { type: 'scientificApplicationType', title: 'Model' }
        ],
        disclaimer:
            'Storm Water Management Model is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'Michelle Simon',
            number: '513-569-7469',
            email: 'Simon.Michelle@epa.gov'
        }
    },
    {
        id: 5,
        name: 'Drinking Water Treatability Database (TDB)',
        acronym: 'TDB',
        link: 'https://www.epa.gov/water-research/drinking-water-treatability-database-tdb',
        shortDescription:
            'TDB is an assembly of referenced data on the control of contaminants (e.g., PFAS, PFOA, and PFOS) in drinking water accessible to the user community as an interactive web application.',
        longDescription: `EPA's Drinking Water Treatability Database (TBD) is an easy to use tool that provides referenced information on the control of contaminants (e.g., PFAS, PFOA and PFOS) in drinking water. It was designed for use by utilities, first responders to spills or emergencies, consultants and technical assistance providers, treatment process designers, and researchers. Information in the TDB is gathered from thousands of literature sources and assembled on one site. Information is available for over 70 regulated and unregulated contaminants and more than 30 treatment processes. For each treatment process selected, information upon which the effectiveness depends is provided, including key process parameters such as coagulant dose, oxidant dose, filter loading rate, filter depth and contact time; key water quality parameters, such as pH, temperature, turbidity and alkalinity; contaminant's importance; regulation; presence on the CCL; pesticide registration; etc. For each contaminant, information is provided on parameters such as solubility, vapor pressure, and Henry's Law constant. Microbial properties include parameters such as taxonomy, size and shape. Information on fate and transport includes parameters such as volatilization half-life and biodegradation half-life that may be useful in assessing the contaminant's presence in source waters.`,
        keywords: [
            { type: 'primaryAudience', title: 'Utilities' },
            {
                type: 'secondaryAudience',
                title: 'NGO/Association/Foundation'
            },
            {
                type: 'secondaryAudience',
                title: 'Academia'
            },
            {
                type: 'secondaryAudience',
                title: 'Government'
            },
            { type: 'environmentalTopicArea', title: 'Chemicals & Toxics' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Browser-based' },
            { type: 'scientificApplicationType', title: 'Database' }
        ],
        disclaimer:
            'Drinking Water Treatability Database is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'N/A',
            number: 'N/A',
            email: 'N/A'
        }
    },
    {
        id: 6,
        name: 'EnviroAtlas',
        acronym: 'EnviroAtlas',
        link: 'https://www.epa.gov/enviroatlas',
        shortDescription:
            'An online decision support platform allowing users to view, assess, analyze, and download a wealth of geospatial data related to the places where people live, work, and play. This tool is targeted towards decision-makers, educators, and researchers.',
        longDescription: `EnviroAtlas is an interactive, web-based suite of tools that states, communities, and citizens can use to help inform policy and planning decisions that impact the places where people live, learn, work and play. The EnviroAtlas provides indicators of ecosystem services for the US, mostly summarized by 12-digit HUCs or census block groups. In addition to summarized data, pixel maps of either 30 meter or 1 meter resolution are also available. Over 500 indicators of ecosystem services are provided, with a subset of those being available at a very fine scale for a selection of featured places covering over 1400 municipalities and over 15 % of the US population as of February 2020. These indicators of ecosystem services relate to clean air; clean and plentiful water; hazard mitigation; climate stabilization, biodiversity conservation, food, fuel, and materials; and recreation, culture, and aesthetics. Demographic indicators at multiple Census geographies are also available. An Interactive Map allows users to readily discover and use the data. EnviroAtlas allows users to identify opportunities for improving the provision of ecosystem services and to examine human health and well-being in relation to environmental conditions such as urban heat islands, near-road pollution and mitigation, access to green space and recreation, water quality, and other quality-of-life variables. The EnviroAtlas Eco-Health Relationship Browser tool summarizes the scientific literature linking major ecosystem types, the services they provide to society, and more than 35 human health issues that are associated with service provision or degradation. The EnviroAtlas includes use cases that walk the user through examples of using EnviroAtlas resources in real-world contexts. It also includes multiple educational modules illustrating how EnviroAtlas tools and resources can be used in classrooms and informal education. EnviroAtlas continues to evolve with increasing functionality and the incorporation of new data. Intended users of EnviroAtlas include decision-makers, educators, and scientists. EnviroAtlas also includes downloadable GIS Tools like AtTILA, and a Dasymetric Population Calculation Tool (DASY). AtTILA is a toolbox allowing users to calculate many commonly used landscape, riparian, and land use stressor metrics. The DASY tool allows users to disaggregate population data and downscale it to individual grid cells.`,
        keywords: [
            { type: 'primaryAudience', title: 'NGO/Association/Foundation' },
            {
                type: 'secondaryAudience',
                title: 'General Public'
            },
            {
                type: 'secondaryAudience',
                title: 'Academia'
            },
            {
                type: 'secondaryAudience',
                title: 'Government'
            },
            { type: 'environmentalTopicArea', title: 'Chemicals & Toxics' },
            { type: 'environmentalTopicArea', title: 'Ecosystems' },
            { type: 'environmentalTopicArea', title: 'Health' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Browser-based' },
            { type: 'scientificApplicationType', title: 'Data Visualization' },
            { type: 'scientificApplicationType', title: 'Decision Support' },
            {
                type: 'scientificApplicationType',
                title: 'Geographic Information System'
            }
        ],
        disclaimer:
            'EnviroAtlas is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'Jessica Daniel',
            number: '919-541-1189',
            email: 'Daniel.Jessica@epa.gov'
        }
    },
    {
        id: 7,
        name: 'EPANET',
        acronym: 'EPANET',
        link: 'https://www.epa.gov/water-research/epanet',
        shortDescription:
            'EPANET is a widely used computer program for modeling water flow and quality in drinking water pipes. EPANET can be used for water quality applications, operational enhancements, designing capital improvement projects, and resilience planning.',
        longDescription: `EPANET is a software application used throughout the world to model water distribution systems. It was developed as a tool for understanding the movement and fate of drinking water constituents within distribution systems, and can be used for many different types of applications in distribution systems analysis. Today, engineers and consultants use EPANET to design and size new water infrastructure, retrofit existing aging infrastructure, optimize operations of tanks and pumps, reduce energy usage, investigate water quality problems, and prepare for emergencies. It can also be used to model contamination threats and evaluate resilience to security threats or natural disasters. EPANET is public domain software that can be freely copied and distributed. It is Windows®-based and will work with all versions of Windows. `,
        keywords: [
            { type: 'primaryAudience', value: 'Utilities' },
            {
                type: 'secondaryAudience',
                title: 'Government'
            },
            {
                type: 'secondaryAudience',
                title: 'NGO/Association/Foundation'
            },
            {
                type: 'secondaryAudience',
                title: 'Academia'
            },
            { type: 'environmentalTopicArea', title: 'Emergency Response' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Desktop' },
            { type: 'scientificApplicationType', title: 'Model' }
        ],
        disclaimer:
            'EPANET is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'Feng Shang',
            number: '513-569-7025',
            email: 'shang.feng@epa.gov'
        }
    },
    {
        id: 8,
        name: 'National Stormwater Calculator (SWC-MWA)',
        acronym: 'SWC-MWA',
        link: 'https://swcweb.epa.gov/stormwatercalculator/',
        shortDescription:
            'The SWC is an application that estimates the annual amount of rainwater and frequency of runoff from a specific site (less than 12 acres) anywhere in the United States, including Puerto Rico, using green infrastructure low impact development practices.',
        longDescription: `EPA’s National Stormwater Calculator (SWC) is a software application that estimates the annual amount of rainwater and frequency of runoff from a specific site. Estimates are based on local soil conditions, land cover, and historic rainfall records. Users supply information about the site’s land cover and then select the low impact development (LID) controls they would like to use. The LID controls include seven green infrastructure practices. The SWC is designed to be used by anyone interested in reducing runoff from a property, including site developers, landscape architects, urban planners, and homeowners. This version of the SWC is a mobile web-based application. It can be used on desktop devices and mobile devices, such as smartphones and tablets, and is compatible with all operating systems. It works best with the following browsers: Microsoft Edge, Google Chrome, Mozilla Firefox, and Apple Safari. `,
        keywords: [
            { type: 'primaryAudience', title: 'Local/Community' },
            {
                type: 'secondaryAudience',
                title: 'Government'
            },
            {
                type: 'secondaryAudience',
                title: 'NGO/Association/Foundation'
            },
            {
                type: 'secondaryAudience',
                title: 'Academia'
            },
            { type: 'environmentalTopicArea', title: 'Land' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Browser-based' },
            { type: 'scientificApplicationType', title: 'Decision Support' },
            { type: 'scientificApplicationType', title: 'Model' }
        ],
        disclaimer:
            'National Stormwater Calculator (Mobile Web Application) is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'Jason Bernagros',
            number: '202-566-1671',
            email: 'Bernagros.Jason@epa.gov'
        }
    },
    {
        id: 9,
        name: 'BIOCHLOR Natural Attenuation Decision Support System',
        acronym: 'BIOCHLOR',
        link: 'https://www.epa.gov/water-research/biochlor-natural-attenuation-decision-support-system',
        shortDescription:
            'The software, programmed in a Microsoft Excel spreadsheet and based on the Domenico analytical solute transport model, has the ability to simulate one-dimensional advection, three-dimensional dispersion, linear adsorption, and biotransformation via reductive dechlorination (the dominant biotransformation process at most chlorinated solvent sites). ',
        longDescription: `The software, programmed in a Microsoft Excel spreadsheet and based on the Domenico analytical solute transport model, has the ability to simulate one-dimensional advection, three-dimensional dispersion, linear adsorption, and biotransformation via reductive dechlorination (the dominant biotransformation process at most chlorinated solvent sites). Reductive dechlorination is assumed to occur under anaerobic conditions and dissolved solvent degradation is assumed to follow a sequential first-order decay process.`,
        keywords: [
            { type: 'primaryAudience', title: 'Government: EPA' },
            {
                type: 'secondaryAudience',
                title: 'General Public'
            },
            {
                type: 'secondaryAudience',
                title: 'Civil Engineers'
            },
            {
                type: 'secondaryAudience',
                title: 'Urban Planners'
            },
            {
                type: 'secondaryAudience',
                title: 'Risk Assessors'
            },
            { type: 'environmentalTopicArea', title: 'Chemicals & Toxics' },
            { type: 'environmentalTopicArea', title: 'Land' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Desktop' },
            { type: 'scientificApplicationType', title: 'Decision Support' },
            { type: 'scientificApplicationType', title: 'Model' },
            { type: 'scientificApplicationType', title: 'Spreadsheet-based' }
        ],
        disclaimer:
            'BIOCHLOR Natural Attenuation Decision Support System is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'David Burden',
            number: '580-436-8606',
            email: 'Burden.David@epa.gov'
        }
    },
    {
        id: 10,
        name: 'AQUATOX',
        acronym: 'AQUATOX',
        link: 'https://www.epa.gov/ceam/aquatox',
        shortDescription:
            'AQUATOX is an aquatic system simulation model. It can be used to predict the fate of various pollutants such as excess nutrients and organic chemicals in an aquatic ecosystem. It can also be used to predict the effects of those pollutants on parts of the ecosystem such as fish, invertebrates, and aquatic plants.',
        longDescription: `AQUATOX is an aquatic system simulation model. It can be used to predict the fate of various pollutants such as excess nutrients and organic chemicals in an aquatic ecosystem. It can also be used to predict the effects of those pollutants on parts of the ecosystem such as fish, invertebrates, and aquatic plants. This model is a valuable tool for ecologists, biologists, water quality modelers, and anyone involved in performing ecological risk assessments for aquatic ecosystems. Although incorporating constructs from classic ecosystem and chemodynamic models, AQUATOX was developed from the beginning as an applied model for use by environmental analysts. `,
        keywords: [
            { type: 'primaryAudience', title: 'General Public' },
            { type: 'environmentalTopicArea', title: 'Chemicals & Toxics' },
            { type: 'environmentalTopicArea', title: 'Water' },
            { type: 'platform', title: 'Desktop' },
            { type: 'scientificApplicationType', title: 'Model' }
        ],
        disclaimer:
            'AQUATOX is public domain software that can be freely used, copied, and distributed.',
        techSupport: {
            name: 'Brenda Rashleigh',
            number: '401-782-3014',
            email: 'Rashleigh.Brenda@epa.gov'
        }
    }
];

export default function SmartSearch() {
    const [advancedOptions, setAdvancedOptions] = useState({
        environmentalTopicAreas: [],
        platform: {
            browserBased: false,
            desktop: false,
            mobileApp: false,
            webService: false
        },
        scientificApplicationType: []
    });
    const [searchFields, setSearchFields] = useState({
        name: false,
        acronym: false,
        shortDescription: false,
        longDescription: false,
        keywords: false
    });
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState([]);
    const [bookmarks, setBookmarks] = useState(new Map());
    const [selectedMatchOption, setSelectedMatchOption] =
        useState('Match any terms');

    useEffect(() => {
        console.log('Selected Match Option is:');
        console.log(selectedMatchOption);
    }, [selectedMatchOption]);

    useEffect(() => {
        console.log('Search Value is:');
        console.log(searchValue);
    }, [searchValue]);

    useEffect(() => {
        console.log('Results are:');
        console.log(results);
    }, [results]);

    useEffect(() => {
        console.log('Bookmarks are:');
        console.log(bookmarks);
    }, [bookmarks]);

    useEffect(() => {
        console.log('Search fields are:');
        console.log(searchFields);
    }, [searchFields]);

    useEffect(() => {
        console.log('Advanced Options are:');
        console.log(advancedOptions);
    }, [advancedOptions]);

    const doSearch = () => {
        const searchResults = [];
        for (let entry of searchData) {
            let match = false;
            // Advanced options
            if (advancedOptions.environmentalTopicAreas?.length > 0) {
                for (let keyword of entry.keywords) {
                    if (
                        keyword.type === 'environmentalTopicArea' &&
                        advancedOptions.environmentalTopicAreas.includes(
                            keyword.title
                        )
                    ) {
                        match = true;
                    }
                }
            }
            if (advancedOptions.platform?.browserBased) {
                for (let keyword of entry.keywords) {
                    if (
                        keyword.type === 'platform' &&
                        keyword.title === 'Browser-based'
                    ) {
                        match = true;
                    }
                }
            }
            if (advancedOptions.platform?.desktop) {
                for (let keyword of entry.keywords) {
                    if (
                        keyword.type === 'platform' &&
                        keyword.title === 'Desktop'
                    ) {
                        match = true;
                    }
                }
            }
            if (advancedOptions.platform?.mobileApp) {
                for (let keyword of entry.keywords) {
                    if (
                        keyword.type === 'platform' &&
                        keyword.title === 'Mobile App'
                    ) {
                        match = true;
                    }
                }
            }
            if (advancedOptions.platform?.webService) {
                for (let keyword of entry.keywords) {
                    if (
                        keyword.type === 'platform' &&
                        keyword.title === 'Web Service'
                    ) {
                        match = true;
                    }
                }
            }
            if (advancedOptions.scientificApplicationType?.length > 0) {
                for (let keyword of entry.keywords) {
                    if (
                        keyword.type === 'scientificApplicationType' &&
                        advancedOptions.scientificApplicationType.includes(
                            keyword.title
                        )
                    ) {
                        match = true;
                    }
                }
            }
            if (
                entry.name.toLowerCase().includes(searchValue) ||
                entry.shortDescription.toLowerCase().includes(searchValue)
            ) {
                match = true;
            }

            if (match) {
                searchResults.push(entry);
            }
        }
        setResults(searchResults);
    };

    return (
        <Row>
            <Col>
                <AdvancedSearch
                    advancedOptions={advancedOptions}
                    setAdvancedOptions={setAdvancedOptions}
                />
                <Bookmarks bookmarks={bookmarks} setBookmarks={setBookmarks} />
                <br />
            </Col>
            <Col style={{ paddingLeft: '20px' }}>
                <SearchMain
                    searchData={searchData}
                    searchFields={searchFields}
                    setSearchFields={setSearchFields}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    results={results}
                    setResults={setResults}
                    bookmarks={bookmarks}
                    setBookmarks={setBookmarks}
                    doSearch={doSearch}
                    selectedMatchOption={selectedMatchOption}
                    setSelectedMatchOption={setSelectedMatchOption}
                />
            </Col>
        </Row>
    );
}
