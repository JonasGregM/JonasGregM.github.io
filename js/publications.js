/*
 * Publication data
 * ----------------
 * Add new entries at the top of the relevant list.
 * Required: type, title, authors, details, firstAuthor, topic
 * Optional: url
 * topic: "drone" or "aircraft"
 */
window.PUBLICATIONS = [
    // Journal papers
    {
        type: "journal",
        title: "Acoustic and aerodynamic performance evaluation of a commercial toroidal propeller compared to conventional propellers",
        authors: ["J. Meister", "T. Van Renterghem", "R. Pieren"],
        details: "Acta Acustica, 2026.",
        url: "https://doi.org/10.1051/aacus/2026057",
        firstAuthor: true,
        topic: "drone"
    },
    {
        type: "journal",
        title: "Measured differences in the sound emission of multi-rotor unmanned aerial systems during hover and cruise",
        authors: ["J. Meister", "J. Jaeggi", "T. Van Renterghem", "R. Pieren"],
        details: "JASA, 2026.",
        url: "https://doi.org/10.1121/10.0043028",
        firstAuthor: true,
        topic: "drone"
    },
    {
        type: "journal",
        title: "Improved configuration management for greener approaches: evaluation of a novel pilot support concept",
        authors: ["T. Bauer", "F. Abdelmoula", "J. Boyer", "M. Gerber", "J. Meister", "J.M. Wunderli"],
        details: "CEAS Aeronautical Journal, 2025.",
        url: "https://doi.org/10.1007/s13272-025-00846-x",
        firstAuthor: false,
        topic: "aircraft"
    },
    {
        type: "journal",
        title: "Configuration Estimation from Position Data of Civil Jet Aircraft for Noise Mapping",
        authors: ["J. Meister", "S. Schalcher"],
        details: "Journal of Aircraft, 2025.",
        url: "https://arc.aiaa.org/doi/10.2514/1.C038338",
        firstAuthor: true,
        topic: "aircraft"
    },
    {
        type: "journal",
        title: "Short-term noise annoyance towards drones and other transportation noise sources: A laboratory study",
        authors: ["C. Kawai", "J. Jaeggi", "F. Georgiou", "J. Meister", "R. Pieren", "B. Schäffer"],
        details: "J. Acoust. Soc. Am., 2024.",
        url: "https://pubs.aip.org/asa/jasa/article/156/4/2578/3316980/Short-term-noise-annoyance-towards-drones-and/",
        firstAuthor: false,
        topic: "drone"
    },
    {
        type: "journal",
        title: "Pilot Assistance Systems for Energy-Optimized Approaches: Is It Possible to Reduce Fuel Consumption and Noise at the Same Time?",
        authors: ["J.M. Wunderli", "J. Meister", "J. Boyer", "M. Gerber", "T. Bauer", "F. Abdelmoula"],
        details: "Aerospace (MDPI), 2024.",
        url: "https://www.mdpi.com/2226-4310/11/6/450/",
        firstAuthor: false,
        topic: "aircraft"
    },
    {
        type: "journal",
        title: "Power setting estimation of departing civil jet aircraft based on machine learning",
        authors: ["J. Meister"],
        details: "Journal of Aircraft, 2024.",
        url: "https://arc.aiaa.org/doi/abs/10.2514/1.C037619",
        firstAuthor: true,
        topic: "aircraft"
    },
    {
        type: "journal",
        title: "A Method to Measure and Model Acoustic Emissions of Multicopters",
        authors: ["J.M. Wunderli", "J. Meister", "O. Boolakee", "K. Heutschi"],
        details: "International Journal of Environmental Research and Public Health, 2023.",
        url: "https://www.mdpi.com/1660-4601/20/1/96/",
        firstAuthor: false,
        topic: "drone"
    },
    {
        type: "journal",
        title: "Aircraft noise in situations with grazing sound incidence - Comparing different modeling approaches",
        authors: ["J.M. Wunderli", "J. Meister", "D. Jäger", "S. Schalcher", "C. Zellmann", "B. Schäffer"],
        details: "The Journal of the Acoustical Society of America, 2022.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35649934/",
        firstAuthor: false,
        topic: "aircraft"
    },
    {
        type: "journal",
        title: "Comparison of the Aircraft Noise Calculation Programs sonAIR, FLULA2 and AEDT with Noise Measurements of Single Flights",
        authors: ["J. Meister", "S. Schalcher", "J.M. Wunderli", "D. Jäger", "C. Zellmann", "B. Schäffer"],
        details: "Aerospace (MDPI), 2021.",
        url: "https://www.mdpi.com/2226-4310/8/12/388",
        firstAuthor: true,
        topic: "aircraft"
    },

    // Conference papers
    {
        type: "conference",
        title: "Modelling the sound exposure for a field study on medical UAV operations in the city of Zurich, Switzerland",
        authors: ["C. Affolter", "J. Meister", "J.M. Wunderli"],
        details: "QuietDrones 2026, Delft, Netherlands.",
        firstAuthor: false,
        topic: "drone"
    },
    {
        type: "conference",
        title: "Differences in sound emission level of multi-rotor UAS during hover and cruise",
        authors: ["J. Meister", "Jonas Jaeggi", "Timothy van Renterghem", "Reto Pieren"],
        details: "ForumAcusticum/EURONOISE 2025, Malaga, Spain.",
        firstAuthor: true,
        topic: "drone"
    },
    {
        type: "conference",
        title: "UAV noise emission characterisation using a compact on-board measurement system",
        authors: ["J. Meister", "Jonas Jaeggi", "Timothy van Renterghem", "Reto Pieren"],
        details: "QuietDrones 2024, Manchester, England.",
        firstAuthor: true,
        topic: "drone"
    },
    {
        type: "conference",
        title: "Assessing the performance of the sonAIR aircraft noise model in predicting noise levels at Schiphol Airport",
        authors: ["R. Boelhouwer", "R. van der Grift", "M. Snellen", "D. Simons", "J. Meister", "J.M. Wunderli"],
        details: "30th AIAA/CEAS Aeroacoustic Conference 2024, Rome, Italy.",
        firstAuthor: false,
        topic: "aircraft"
    },
    {
        type: "conference",
        title: "N1 estimation of jet aircraft for departures using basic operational data",
        authors: ["J. Meister"],
        details: "Forum Acusticum 2023, Torino, Italy.",
        firstAuthor: true,
        topic: "aircraft"
    },
    {
        type: "conference",
        title: "Improved energy management during arrival for lower emissions",
        authors: ["P. Pauly", "J. Meister", "J.M. Wunderli", "M. Gerber", "J. Boyer", "F. Abdelmoula", "T. Bauer"],
        details: "Towards Sustainable Aviation Summit 2022, Toulouse, France.",
        firstAuthor: false,
        topic: "aircraft"
    },
    {
        type: "conference",
        title: "Calculation of annual aircraft noise exposure for Geneva and Zurich airports with the next-generation program sonAIR – first results",
        authors: ["S. Schalcher", "C. Zellmann", "J. Meister", "J.M. Wunderli", "B. Schäffer"],
        details: "Internoise 2022, Glasgow, Scotland.",
        firstAuthor: false,
        topic: "aircraft"
    },
    {
        type: "conference",
        title: "Validation of three aircraft noise calculation models",
        authors: ["J. Meister", "S. Schalcher", "J.M. Wunderli", "B. Schäffer"],
        details: "Internoise 2022, Glasgow, Scotland.",
        firstAuthor: true,
        topic: "aircraft"
    },
    {
        type: "conference",
        title: "Improved Configuration Management for Greener Approaches - Evaluation of a Novel Pilot Support Concept",
        authors: ["T. Bauer", "F. Abdelmoula", "J. Boyer", "M. Gerber", "J. Meister", "J.M. Wunderli"],
        details: "33rd Congress of the International Council of the Aeronautical Sciences 2022, Stockholm, Sweden.",
        firstAuthor: false,
        topic: "aircraft"
    }
];
