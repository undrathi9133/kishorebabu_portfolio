import React from 'react';

function Publications() {
  return (
    <div className='container'>
      <h2 className='page-header'>Publications</h2>
      <hr className='mt-0' />

      {/* Conference Papers */}
      <div className='mt-5'>
        <h4 className='text-theme'>Papers Presented in Conferences (Scopus-indexed):</h4>
        <div className='table-responsive'>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Paper Title</th>
                <th>DOI</th>
                <th>Conference Name</th>
                <th>Organizer</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "DNS DDoS Amplification Attack Detection Using Multi-Layer Perceptron Classification Algorithm",
                  doi: "10.1109/AIC61668.2024.10730978",
                  conf: "AIC 2024",
                  org: "IEEE",
                  year: "2024"
                },
                {
                  title: "SSDP DDoS Attacks Detection with Machine Learning Classification Algorithms",
                  doi: "10.1007/978-981-97-8031-0_98",
                  conf: "Springer LNCS",
                  org: "Springer",
                  year: "2024"
                },
                {
                  title: "LDAP DDoS attack detection using SVM with different kernel functions",
                  doi: "10.1063/5.0198663",
                  conf: "AIP Conference Proceedings",
                  org: "AIP",
                  year: "2024"
                },
                {
                  title: "Syn Flood DDoS Attack Detection with Multilayer Perceptron Optimization Techniques",
                  doi: "10.1007/978-981-99-6690-5_18",
                  conf: "CHSN 2022",
                  org: "Springer",
                  year: "2024"
                },
                {
                  title: "UDP Flood DDoS Attack Detection Using MLP and Uncorrelated Features",
                  doi: "10.1007/978-981-99-2742-5_52",
                  conf: "ICCIC 2023",
                  org: "Springer",
                  year: "2023"
                },
                {
                  title: "NetBIOS DDoS Attacks Detection With Machine Learning",
                  doi: "10.1109/InCACCT57535.2023.10141815",
                  conf: "InCACCT 2023",
                  org: "IEEE",
                  year: "2023"
                },
                {
                  title: "SynFlood DDoS Detection with SVM Kernels using Uncorrelated Features",
                  doi: "10.1109/ICCSEA54677.2022.9936114",
                  conf: "ICCSEA 2022",
                  org: "IEEE",
                  year: "2022"
                },
                {
                  title: "Evaluation of SVM Kernels with Multiple Feature Subsets for DDoS Detection",
                  doi: "Presented at 9th Springer ACSS Doctoral Symposium",
                  conf: "Springer ACSS 2022",
                  org: "Springer",
                  year: "2022"
                }
              ].map((paper, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{paper.title}</td>
                  <td><a href={`https://doi.org/${paper.doi}`} target='_blank' rel='noreferrer'>{paper.doi}</a></td>
                  <td>{paper.conf}</td>
                  <td>{paper.org}</td>
                  <td>{paper.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Book Chapters */}
      <div className='mt-5'>
        <h4 className='text-theme'>Book Chapters Published:</h4>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Authors</th>
              <th>Title</th>
              <th>Publisher & ISBN</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kishore Babu Dasari, Srinivas Mekala</td>
              <td>Proactive DDoS Attacks Detection on the Cloud Computing Environment Using Machine Learning Techniques</td>
              <td>IGI Global, ISBN: 978-1-6684-9317-5</td>
              <td>pp. 318–333</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Journal Publications */}
      <div className='mt-5'>
        <h4 className='text-theme'>Papers Published in Journals:</h4>
        <div className='table-responsive'>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Title</th>
                <th>DOI</th>
                <th>Journal</th>
                <th>Year</th>
                <th>Pages</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "Evaluation of UDP-based DDoS detection using neural networks",
                  doi: "https://doi.org/10.18280/isi.290321",
                  journal: "ISI, Vol. 29, No. 3",
                  year: "2024",
                  pages: "1031–1042"
                },
                {
                  title: "Detection of DDoS Attacks Using Machine Learning Classification Algorithms",
                  doi: "https://doi.org/10.5815/ijcnis.2022.06.07",
                  journal: "IJCNIS, Vol.14, No.6",
                  year: "2022",
                  pages: "89–97"
                },
                {
                  title: "Detection of TCP-based DDoS attacks with SVM classification",
                  doi: "https://doi.org/10.18280/ijsse.120213",
                  journal: "IJ Safety and Security Engineering, Vol. 12, No. 2",
                  year: "2022",
                  pages: "239–249"
                },
                {
                  title: "TCP/UDP-based exploitation DDoS detection using AI classification",
                  doi: "https://doi.org/10.18280/ria.360107",
                  journal: "Revue d'Intelligence Artificielle, Vol. 36, No. 1",
                  year: "2022",
                  pages: "61–71"
                },
                {
                  title: "Detection of different DDoS attacks using ML algorithms",
                  doi: "https://doi.org/10.18280/isi.260505",
                  journal: "ISI, Vol. 26, No. 5",
                  year: "2021",
                  pages: "461–468"
                },
                {
                  title: "Distributed Denial of Service attacks, tools and Defense Mechanisms",
                  doi: "IJPAM, Vol.120, No.6",
                  journal: "IJPAM",
                  year: "2018",
                  pages: "3423–3437"
                },
                {
                  title: "Outline of Clustering High Dimensional Information Account",
                  doi: "IJRECS, V-5.I-3",
                  journal: "IJRECS",
                  year: "2016",
                  pages: "N/A"
                },
                {
                  title: "Time Serving Programming with Worst Case Delay Guarantees",
                  doi: "IJRECS, V-5,I-2",
                  journal: "IJRECS",
                  year: "2015",
                  pages: "N/A"
                },
                {
                  title: "Conceptualization Based Query for Dynamic RDF Database",
                  doi: "IJRECS, V-2,I-1",
                  journal: "IJRECS",
                  year: "2014",
                  pages: "N/A"
                }
              ].map((paper, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{paper.title}</td>
                  <td><a href={paper.doi} target="_blank" rel="noreferrer">{paper.doi}</a></td>
                  <td>{paper.journal}</td>
                  <td>{paper.year}</td>
                  <td>{paper.pages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conferences Attended */}
      <div className='mt-5'>
        <h4 className='text-theme'>Conferences Attended:</h4>
        <ul>
          <li>AICC-2018, MLRIT Hyderabad – Presented: “DDoS attacks, tools and Defence Mechanisms”</li>
          <li>ICCDE-2020, Vasavi College of Engineering, Hyderabad</li>
        </ul>
      </div>
    </div>
  );
}

export default Publications;
