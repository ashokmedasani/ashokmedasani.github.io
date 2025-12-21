---
layout: default
---

<img class="banner" src="assets/img/banner.jpg" alt="Banner" />

<div class="hero">
  <img class="avatar" src="assets/img/profile.jpg" alt="Ashok Medasani" />

  <div class="hero-text">
    <h1>Ashok Medasani</h1>
    <p class="subtitle"><b>Technical Data Analyst</b> • Data Engineering • BI • ML</p>

    <div class="quick-links">
      <a class="btn" href="mailto:medasaniashok4@gmail.com">Email</a>
      <a class="btn" href="https://www.linkedin.com/in/YOUR-LINKEDIN/" target="_blank">LinkedIn</a>
      <a class="btn" href="https://huggingface.co/YOUR-HF-USERNAME" target="_blank">Hugging Face</a>
      <a class="btn primary" href="https://drive.google.com/YOUR-RESUME-LINK" target="_blank">Resume (PDF)</a>
    </div>

    <p class="meta">📍 St. Louis, MO • 📞 (314) 773-9963</p>
  </div>
</div>

<!-- ========== TOP NAV TABS ========== -->
<div class="topnav" id="topNav">
  <button class="navbtn active" data-section="home">Home</button>
  <button class="navbtn" data-section="skills">Skills</button>
  <button class="navbtn" data-section="projects">Projects</button>
  <button class="navbtn" data-section="experience">Experience</button>
  <button class="navbtn" data-section="education">Education</button>
  <button class="navbtn" data-section="certs">Certifications</button>
</div>

<!-- ========== SECTIONS (ONLY 1 VISIBLE) ========== -->
<div class="section-wrap">

  <!-- HOME -->
  <section class="section active" id="sec-home">
    <div class="glass">
      <h2>Summary</h2>
      <p>
        Technical Data Analyst with 3+ years of experience delivering enterprise-scale data pipelines,
        analytics automation, compliance reporting, and executive dashboards using Python, SQL, Power BI,
        Snowflake, AWS (S3, RDS), Airflow, and ETL/ELT frameworks.
      </p>
      <p>
        Proven track record supporting 20+ production systems, maintaining 99.9%+ data reliability,
        improving audit readiness by 40%, and reducing manual reporting effort by 1,000+ hours annually.
      </p>
    </div>

    <div class="kpi-grid">
      <div class="kpi">
        <div class="kpi-num">20+</div>
        <div class="kpi-label">Production systems supported</div>
      </div>
      <div class="kpi">
        <div class="kpi-num">99.9%+</div>
        <div class="kpi-label">Data reliability</div>
      </div>
      <div class="kpi">
        <div class="kpi-num">40%</div>
        <div class="kpi-label">Audit readiness improvement</div>
      </div>
      <div class="kpi">
        <div class="kpi-num">1000+</div>
        <div class="kpi-label">Hours saved annually</div>
      </div>
    </div>

    <div class="glass">
      <h2>What I Build</h2>
      <div class="pillrow">
        <span class="pill">Real-time Monitoring & Anomaly Detection</span>
        <span class="pill">ETL/ELT Pipelines (Airflow / DBT)</span>
        <span class="pill">Executive BI Dashboards (Power BI)</span>
        <span class="pill">Compliance & SOX Reporting</span>
        <span class="pill">Predictive Modeling & Segmentation</span>
      </div>
    </div>
  </section>

  <!-- SKILLS -->
  <section class="section" id="sec-skills">
    <h2>Skills</h2>

    <div class="tabs">
      <div class="tab-buttons">
        <button class="tab-btn active" data-tab="da">Data Analytics</button>
        <button class="tab-btn" data-tab="ml">Machine Learning</button>
        <button class="tab-btn" data-tab="dl">Deep Learning</button>
        <button class="tab-btn" data-tab="bi">BI & Reporting</button>
        <button class="tab-btn" data-tab="de">Data Eng & ETL</button>
        <button class="tab-btn" data-tab="cloud">Cloud</button>
        <button class="tab-btn" data-tab="enterprise">Enterprise</button>
      </div>

      <div class="tab-panels">
        <div class="tab-panel active" id="tab-da">
          <div class="pillrow">
            <span class="pill">KPI Frameworks</span><span class="pill">Cohort Analysis</span>
            <span class="pill">Funnel Drop-off</span><span class="pill">A/B Testing</span>
            <span class="pill">Statistical Inference</span><span class="pill">Feature Engineering</span>
          </div>
          <ul class="clean">
            <li><b>SQL:</b> CTEs, windows, joins, optimization</li>
            <li><b>Python:</b> Pandas/NumPy EDA, validation, automation</li>
            <li><b>Analytics:</b> Segmentation, retention, engagement trends</li>
          </ul>
        </div>

        <div class="tab-panel" id="tab-ml">
          <div class="pillrow">
            <span class="pill">Regression</span><span class="pill">Classification</span>
            <span class="pill">Clustering</span><span class="pill">Anomaly Detection</span>
          </div>
          <ul class="clean">
            <li>Random Forest, Gradient Boosting, Logistic Regression</li>
            <li>Model evaluation: RMSE/MAE/R², Accuracy/F1/ROC-AUC</li>
            <li>Cross-validation, pipelines, tuning</li>
          </ul>
        </div>

        <div class="tab-panel" id="tab-dl">
          <div class="pillrow">
            <span class="pill">MLP</span><span class="pill">CNN</span>
            <span class="pill">RNN</span><span class="pill">LSTM</span><span class="pill">GRU</span>
          </div>
          <ul class="clean">
            <li>Concepts: training curves, regularization, monitoring</li>
            <li>Regularization: Dropout, BatchNorm</li>
          </ul>
        </div>

        <div class="tab-panel" id="tab-bi">
          <div class="pillrow">
            <span class="pill">Power BI</span><span class="pill">Tableau</span>
            <span class="pill">Looker Studio</span><span class="pill">DAX</span>
          </div>
          <ul class="clean">
            <li>Dashboards: executive reporting, drill-through, KPI cards</li>
            <li>Visualization: Matplotlib, Seaborn, Plotly</li>
            <li>Excel: Macros, Power Query, Pivot Tables</li>
          </ul>
        </div>

        <div class="tab-panel" id="tab-de">
          <div class="pillrow">
            <span class="pill">Airflow</span><span class="pill">DBT</span>
            <span class="pill">ETL/ELT</span><span class="pill">Snowflake</span>
            <span class="pill">ElasticSearch</span>
          </div>
          <ul class="clean">
            <li>Databases: MySQL, PostgreSQL, Snowflake, MongoDB</li>
            <li>Tools: Alteryx, Talend</li>
            <li>Automation: Django, REST APIs, Git workflows</li>
          </ul>
        </div>

        <div class="tab-panel" id="tab-cloud">
          <div class="pillrow">
            <span class="pill">AWS S3</span><span class="pill">AWS RDS</span>
            <span class="pill">QuickSight</span><span class="pill">BigQuery</span>
          </div>
          <ul class="clean">
            <li>AWS: S3, RDS, QuickSight</li>
            <li>GCP: BigQuery • Azure Data Studio</li>
          </ul>
        </div>

        <div class="tab-panel" id="tab-enterprise">
          <div class="pillrow">
            <span class="pill">SOX</span><span class="pill">Audit Reporting</span>
            <span class="pill">PII-Safe</span><span class="pill">RBAC</span><span class="pill">ITSM</span>
          </div>
          <ul class="clean">
            <li>Governance: SOX compliance, audit readiness</li>
            <li>Security: PII-safe handling, RBAC</li>
            <li>Process: Agile/Scrum, Change Management, Jira/Confluence</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="section" id="sec-projects">
    <h2>Projects</h2>

    <div class="cards">
      <div class="card">
        <h3>Predicting Purchase Behavior (Random Forest)</h3>
        <p class="small">Python • Pandas • Scikit-learn • SQL • Power BI</p>
        <div class="pillrow">
          <span class="pill">100k sessions</span><span class="pill">18% higher conversion</span><span class="pill">22% churn cohorts</span>
        </div>
        <ul class="clean">
          <li>Dwell time identified as strongest purchase predictor</li>
          <li>Segment insights for targeted marketing</li>
        </ul>
        <a class="link" href="https://github.com/YOUR-GITHUB/REPO" target="_blank">View repo →</a>
      </div>

      <div class="card">
        <h3>TitanForge Predictive Maintenance</h3>
        <p class="small">Python • Gradient Boosting • SQL • Plotly</p>
        <div class="pillrow">
          <span class="pill">98.1% accuracy</span><span class="pill">27% downtime ↓</span>
        </div>
        <ul class="clean">
          <li>Vibration variance earliest failure indicator</li>
          <li>15-min temperature spikes preceded degradation</li>
        </ul>
        <a class="link" href="https://github.com/YOUR-GITHUB/REPO" target="_blank">View repo →</a>
      </div>

      <div class="card">
        <h3>Enterprise Excel Automation Platform</h3>
        <p class="small">Django • Pandas • REST APIs • RBAC • Git</p>
        <div class="pillrow">
          <span class="pill">300+ hrs/quarter saved</span><span class="pill">12% KPI issues found</span>
        </div>
        <ul class="clean">
          <li>Automated consolidation + validation rules</li>
          <li>Audit traceability improvements</li>
        </ul>
        <a class="link" href="https://github.com/YOUR-GITHUB/REPO" target="_blank">View repo →</a>
      </div>
    </div>

    <div class="glass">
      <h3>Hugging Face</h3>
      <p class="muted">
        Explore my deployed models and analytics apps:
        <a href="https://huggingface.co/YOUR-HF-USERNAME" target="_blank">huggingface.co/YOUR-HF-USERNAME</a>
      </p>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section class="section" id="sec-experience">
    <h2>Experience</h2>

    <div class="xp">
      <h3>Bank of America — Technical Data Analyst II (Officer)</h3>
      <p class="role-meta">Chennai, India • Nov 2021 – Jul 2024</p>
      <ul class="clean">
        <li>Real-time anomaly detection pipelines supporting 20 platforms; sustained <b>99.98% uptime</b>.</li>
        <li>Compliance ETL improved audit readiness by <b>40%</b>.</li>
        <li>Django analytics platform replaced Excel workflows saving <b>1,000+ hours/year</b>.</li>
        <li>Incident intelligence reduced MTTR by <b>25%</b>; early failure detection improved by <b>30%</b>.</li>
        <li>Implemented PII-safe reporting, RBAC, SOX governance; maintained <b>99.9%+ delivery reliability</b>.</li>
      </ul>
    </div>

    <div class="xp">
      <h3>Excelerate — Data Analyst Intern</h3>
      <p class="role-meta">St. Louis, MO • Jul 2024 – Aug 2024</p>
      <ul class="clean">
        <li>Built dashboards supporting 10 regional campaigns with real-time KPIs.</li>
        <li>Resolved <b>17%</b> data quality issues; improved engagement by <b>11%</b>.</li>
        <li>Automated reporting, saving <b>13 hours/week</b>.</li>
      </ul>
    </div>

    <div class="xp">
      <h3>Excelerate — Project Management Intern</h3>
      <p class="role-meta">St. Louis, MO • Aug 2024 – Sep 2024</p>
      <ul class="clean">
        <li>Reduced cross-team execution delays by <b>~20%</b> with delivery tracking systems.</li>
        <li>Created governance templates and repeatable execution frameworks.</li>
      </ul>
    </div>

    <div class="xp">
      <h3>KreditBee — Data Analyst Intern</h3>
      <p class="role-meta">Chennai, India • Jan 2020 – Aug 2021</p>
      <ul class="clean">
        <li>Built pipelines across 500,000 borrower records; dashboards for loan performance.</li>
        <li>Automated ETL and improved reporting SLA by <b>16%</b>.</li>
        <li>Funnel analytics improved completion by <b>15%</b>.</li>
      </ul>
    </div>
  </section>

  <!-- EDUCATION -->
  <section class="section" id="sec-education">
    <h2>Education</h2>
    <div class="glass">
      <h3>Master of Science in Analytics — Saint Louis University</h3>
      <p class="muted">Sep 2024 – Jul 2026 • St. Louis, MO</p>
      <p><b>Coursework:</b> Advanced Statistical Analysis, Machine Learning for Analytics, Data Mining & Warehousing, Big Data Analytics, BI & Visualization, Predictive Analytics, Cloud Data Engineering, Time Series Analysis.</p>
    </div>

    <div class="glass">
      <h3>B.Tech in Computer Science — SRM Institute of Science and Technology</h3>
      <p class="muted">Jul 2017 – Jun 2021 • Chennai, India</p>
      <p><b>Coursework:</b> DSA, DBMS, OOP, OS, Computer Networks, Software Engineering, Web Tech, Cryptography & Network Security.</p>
    </div>
  </section>

  <!-- CERTIFICATIONS -->
  <section class="section" id="sec-certs">
    <h2>Certifications</h2>
    <div class="glass">
      <ol class="clean">
        <li><b>Certified Associate in Project Management (CAPM)</b> — 2025</li>
        <li><b>Microsoft Certified: Azure Data Engineer Associate (DP-203)</b> — 2024</li>
      </ol>
    </div>
  </section>

</div>

<script src="assets/js/main.js"></script>
