export default function mca() {
  return (
    <div>
      <h1>MCA TERM 1</h1>
      <hr />

      <div className="subjectName">
        <details>
          <summary>Mathematical Foundation for Computer Science</summary>
          <b>Introduction to measures of central tendency, dispersion and skewness:</b>
          <ul>
            <li>Central tendency of-</li>
            <ul>
              <li>raw data</li>
              <li>Discrete data</li>
              <li>Grouped frequency data</li>
            </ul>

          </ul>

          <p><b>Dispersion:</b></p>
          <ul>
            <li>Absolute measures of dispersion</li>
            <li>Relative measures of dispersion</li>
          </ul>

          <p><b>Skewness:</b></p>
          <ul>
            <li>Karl Pearson’s coefficient of skewness</li>
            <li>Bowley coefficient of skewness</li>
          </ul>

          <p><b>Self Learning Topics:</b> Graphical representation of data and finding various central tendencies of real data.</p>

          <hr />

          <b>Correlation and Regression:</b>
          <p><b>Correlation:</b></p>
          <ul>
            <li>Karl Pearson’s coefficient of correlation</li>
            <li>Spearman’s Rank correlation coefficient</li>
          </ul>

          <p><b>Regression:</b></p>
          <ul>
            <li>Linear regression</li>
            <li>Two lines of regression</li>
            <li>Least square methods of linear regression</li>
          </ul>

          <p><b>Self Learning Topics:</b> Apply correlation and regression to non-real-world data and explain its graphical representation.</p>

          <hr />

          <b>Introduction to Probability & Conditional Probability:</b>
          <ul>
            <li>Introduction to probability</li>
            <li>Random experiment</li>
            <li>Sample space</li>
            <li>Events</li>
            <li>Axiomatic probability</li>
            <li>Algebra of events</li>
            <li>Conditional probability</li>
            <li>Multiplication theorem of probability</li>
            <li>Independent events</li>
            <li>Bayes Theorem</li>
          </ul>

          <p><b>Self Learning Topics:</b> Applications based on Bayes theorem.</p>

          <hr />

          <b>Random Variable and Expectation:</b>
          <ul >
            <li>Discrete random variable</li>
            <li>Continuous random variable</li>
            <li>Two-dimensional random variable</li>
            <li>Joint probability distribution</li>
            <li>Stochastic independence</li>
            <li>Properties of expectation and variance</li>
            <li>Covariance</li>
          </ul>

          <p><b>Self Learning Topics:</b> Study of various random variables and their independence.</p>

          <hr />

          <b>Theoretical Probability Distributions:</b>
          <ul >
            <li>Binomial</li>
            <li>Poisson</li>
            <li>Normal</li>
          </ul>

          <p><b>Self Learning Topics:</b> Study of properties of standard normal variate.</p>

          <hr />

          <b>Testing of Hypothesis:</b>
          <ul >
            <li>Hypothesis testing</li>
            <li>Type I and Type II errors</li>
            <li>Tests of significance -</li>
            <ul>
              <li>Student's t-test</li>
              <li>Large sample test (z-test)</li>
              <li>Chi-Square test</li>
            </ul>

          </ul>

          <p><b>Self Learning Topics:</b> Study of elementary sampling methods.</p>
        </details>
        <hr className="sub-hr"></hr>
        <details>
        <summary>Advanced DBMS</summary>

        <b>Parallel Database, Distributed Database and ORDBMS:</b>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Architecture for Parallel Databases</li>
            <li>Types of Distributed Databases</li>
            <li>Distributed DBMS Architecture</li>
            <li>Storing Data in a Distributed DBMS</li>
            <li>ORDBMS: Structured Data Types</li>
            <li>ORDBMS: Operations on Structured Data</li>
            <li>ORDBMS: Objects</li>
            <li>ORDBMS: Inheritance</li>
            <li>ORDBMS: Object Oriented vs Object Relational Database (809–817)</li>
        </ul>
        <p><b>Self-Learning:</b> Mapping OODBMS to ORDBMS</p>

        <hr />

        <b>Data Warehousing and OLAP:</b>
        <p><b>Data Warehouse:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Introduction to DW</li>
            <li>DW Architecture</li>
            <li>ETL Process</li>
            <li>Top-down and Bottom-up Approaches</li>
            <li>Characteristics and Benefits of Data Mart</li>
        </ul>

        <p><b>Dimensional Modeling:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Star Schema</li>
            <li>Snowflake Schema</li>
            <li>Fact Constellation Schema</li>
        </ul>

        <p><b>OLAP in the Data Warehouse:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Major Features and Functions</li>
            <li>ROLAP</li>
            <li>MOLAP</li>
            <li>Difference between OLAP and OLTP</li>
        </ul>
        <p><b>Self-Learning:</b> Study any one DW Implementation</p>

        <hr />

        <b>Data Mining and Preprocessing:</b>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Introduction to Data Mining</li>
            <li>Knowledge Discovery (KDD) Process</li>
        </ul>

        <p><b>Data Preprocessing:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Types of Attributes</li>
        </ul>

        <p><b>Data Cleaning:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Missing Values</li>
            <li>Noisy Data</li>
            <li>Data Integration and Transformations</li>
        </ul>

        <p><b>Data Reduction:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Data Cube Aggregation</li>
            <li>Dimensionality Reduction</li>
            <li>Data Compression</li>
            <li>Numerosity Reduction</li>
            <li>Discretization and Concept Hierarchy</li>
        </ul>
        <p><b>Self-Learning:</b> Application of Data Mining in Business Intelligence</p>

        <hr />

        <b>Data Mining Algorithm -<b style={{color:'purple'}}>Association Rules:</b></b>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Support and Confidence</li>
            <li>Frequent Item Sets</li>
            <li>Market Basket Analysis</li>
            <li>Apriori Algorithm</li>
            <li>Associative Classification - Rule Mining</li>
        </ul>
        <p><b>Self-Learning:</b> Association Rule Mining Applications</p>

        <hr />

        <b>Data Mining Algorithm -<b style={{color:'purple'}}>Classification:</b></b>
        <p><b>Classification Methods:</b></p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><b>Statistical-Based Algorithms:</b></li>
            <ul>
              <li>Linear Regression</li>
              <li>Naïve Bayesian Classification</li>
            </ul>

            <li><b>Distance-Based Algorithm:</b> K Nearest Neighbor</li>
            <li><b>Decision Tree-Based Algorithms:</b></li>
            <ul>
              <li>ID3</li>
              <li>C4.5</li>
              <li>CART</li>
            </ul>

        </ul>
        <p><b>Self-Learning:</b> Comparative Study of Classification Algorithms</p>

        <hr />

        <b>Data Mining Algorithm -<b style={{color:'purple'}}> Clustering:</b> </b>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li><b>Clustering Methods:</b></li>
            <ul>
              <li>Partitioning Methods - K-means</li>
              
              <li>Hierarchical Methods</li>
              <ul>
              <li>Agglomerative (Single Link)</li>
              <li>Divisive Methods</li>
              </ul>
            </ul>
        </ul>
        <p><b>Self-Learning:</b> Clustering Algorithm Applications</p>

        <hr />

        <b>Web Mining:</b>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li>Web Content Mining: Crawlers</li>
            <li>Web Structure Mining: Page Rank Algorithm</li>
            <li>Web Usage Mining: Data Structure</li>
        </ul>
        <p><b>Self-Learning:</b> Text Mining</p>
        </details>
        <hr className="sub-hr"></hr>
        {/* advanced java */}
        <details>
        <summary>Advanced Java</summary>

        <b>Collection and Generics:</b>
        <ul>
            <li>Introduction to Generics</li>
            <li>Generic Types</li>
            <li>Parameterized Types</li>
            <li>Wildcards</li>
            <li>Java Collection Framework</li>
            <li>Collections</li>
            <li>Basic Operations</li>
            <li>Bulk Operations</li>
            <li>Iteration</li>
            <li>List</li>
            <li>Set</li>
            <li>Maps</li>
        </ul>

        <b>Lambda Expressions:</b>
        <ul>
            <li>Lambda Type Inference</li>
            <li>Lambda Parameters</li>
            <li>Lambda Function Body</li>
            <li>Returning a Value from a Lambda Expression</li>
        </ul>
        <p><b>Self-Learning Topics:</b> Collection Queues, Arrays</p>

        <hr />

        <b>Introduction to Java EE Programming:</b>
        <ul>
            <li>JSP Architecture</li>
            <li>JSP Building Blocks</li>
            <li>Scripting Tags</li>
            <li>Implicit Objects</li>
            <li>Introduction to Bean</li>
            <li>Standard Actions</li>
            <li>Session Tracking Types and Methods</li>
            <li>Custom Tags</li>
        </ul>
        <p><b>Self-Learning Topics:</b> Simple Application using Servlet</p>

        <hr />

        <b>Spring Framework:</b>
        <ul>
            <li>Introduction to Spring Framework</li>
            <li>POJO Programming Model</li>
            <li>Lightweight Containers</li>
            <li>Spring IOC Container</li>
            <li>Configuration MetaData</li>
            <li>Configuring and Using the Container</li>
            <li>Dependency Injection with Spring – Setter Injection</li>
            <li>Constructor Injection</li>
            <li>Overriding Bean</li>
            <li>Auto Wiring</li>
        </ul>
        <p><b>Self-Learning Topics:</b> Bean Definition Profiles and Inheritance</p>

        <hr />

        <b>Spring and AOP:</b>
        <ul>
            <li>Aspect Oriented Programming with Spring</li>
            <li>Types of Advices</li>
            <li>Defining Pointcut Designator</li>
            <li>Annotations</li>
        </ul>
        <p><b>Self-Learning Topics:</b> AspectJ</p>

        <hr />

        <b>JDBC Data Access with Spring:</b>
        <ul>
            <li>Managing JDBC Connection</li>
            <li>Configuring Data Source to Obtain JDBC Connection</li>
            <li>Data Access Operations with JdbcTemplate and Spring</li>
            <li>RDBMS Operation Classes</li>
            <li>Modeling JDBC Operations as Java Objects</li>
        </ul>
        <p><b>Self-Learning Topics:</b> JDBC Architecture and Basic JDBC Program using DML Operations</p>

        <hr />

        <b>Getting Started with Spring Boot:</b>
        <ul>
            <li>Spring Boot and Database</li>
            <li>Spring Boot Web Application Development</li>
            <li>Spring Boot RESTful Web Services and Database</li>
        </ul>
        <p><b>Self-Learning Topics:</b> Understanding Transaction Management in Spring</p>
        </details>
        <hr className="sub-hr"></hr>
        {/* data Structure */}
        <details>
  <summary>Data Structures</summary>

  <b>Sorting & Searching Techniques:</b>
  <ul>
    <li>Bubble Sort</li>
    <li>Selection Sort</li>
    <li>Insertion Sort</li>
    <li>Shell Sort</li>
    <li>Quick Sort</li>
    <li>Radix Sort</li>
  </ul>

  <b>Searching Techniques:</b>
  <ul>
    <li>Linear Search</li>
    <li>Binary Search</li>
  </ul>

  <b>Hashing Techniques:</b>
  <ul>
    <li>Methods for Hashing:</li>
    <ul>
      <li>Modulo Division</li>
      <li>Digit Extraction</li>
      <li>Linear Probe for Collision Resolution</li>
    </ul>
    
  </ul>
  <p><b>Self-Learning Topics:</b> Direct, Subtraction Hashing, Fold Shift, Fold Boundary</p>

  <hr />

  <b>Stacks & Queue:</b>
  <ul>
    <li>Array Implementation of Stack</li>
    <li>Ordinary and Circular Queue</li>
    <li>Conversion of Infix Notation to Postfix Notation</li>
    <li>Evaluation of Postfix Expression</li>
    <li>Balancing of Parentheses</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Conversion of Infix to Prefix, Other Queue Applications</p>

  <hr />

  <b>Linked List:</b>
  <ul>
    <li>Singly Linked Lists</li>
    <li>Circular Linked List</li>
    <li>Doubly Linked Lists:</li>
    <ul>
      <li>Insert</li>
      <li>Display</li>
      <li>Delete</li>
      <li>Search</li>
      <li>Count</li>
      <li>Reverse (SLL)</li>
      <li>Polynomial Addition</li>
    </ul>

  </ul>

  <b>Linked List Implementation of:</b>
  <ul>
    <li>Stack</li>
    <li>Ordinary Queue</li>
    <li>Priority Queue</li>
    <li>Double Ended Queue</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Comparative Study of Arrays and Linked Lists</p>

  <hr />

  <b>Trees:</b>
  <p><b>Binary Search Tree:</b></p>
  <ul>
    <li>Create</li>
    <li>Recursive Traversal – Preorder, Postorder, Inorder</li>
    <li>Search Largest Node</li>
    <li>Search Smallest Node</li>
    <li>Count Number of Nodes</li>
  </ul>

  <p><b>Heap:</b></p>
  <ul>
    <li>MinHeap</li>
    <li>MaxHeap</li>
    <li>reheapUp</li>
    <li>reheapDown</li>
    <li>Delete</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Expression Tree, Heapsort</p>

  <hr />

  <b>Graphs:</b>
  <ul>
    <li>Represent a Graph using the Adjacency Matrix</li>
    <li>BFS & DFS</li>
    <li>Find the Minimum Spanning Tree (Kruskal’s or Prim’s Algorithm)</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Shortest Path Algorithm</p>

  <hr />

  <b style={{color:'purple'}}>Group Project:</b>
  <p>Work in a group of 3 to 4 members to develop an application solving a real-world problem.</p>
</details>

<hr className="sub-hr"></hr>
<details>
  <summary>Web Technologies</summary>

  <b>Introduction to Node.js, Modules and Events:</b>
  <ul>
    <li>What is Node.js</li>
    <li>Advantages of Node.js</li>
    <li>Node.js Process Model</li>
    <li>Traditional Web Server Model</li>
    <li>Setup Development Environment:</li>
    <ul>
      <li>Installation of Node.js on Windows</li>
      <li>Working in REPL</li>
      <li>Node.js Console</li>
    </ul>
    <li>Modules and Events:</li>
    <ul>
      <li>Standard Callback Pattern</li>
      <li>Event Emitter Pattern</li>
      <li>Event Types</li>
      <li>Event Emitter API</li>
      <li>Creating an Event Emitter</li>
    </ul>
      <li>Defer Execution of a Function</li>
      <li>Cancel Execution of a Function</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Additional Events</p>

  <hr />

  <b>File Handling & HTTP Web Server:</b>
  <ul>
    <li>fs module:</li>
    <ul>
      <li>File Paths</li>
      <li>fs Module</li>
      <li>Opening a File</li>
      <li>Reading from a File</li>
      <li>Writing to a File</li>
      <li>Closing a File</li>
    </ul>

    <li>HTTP Request/Response Object</li>
    <li>Headers</li>
    <li>Piping</li>
    <li>Shutting down the Server</li>
  </ul>
  <p><b>Self-Learning Topics:</b> TCP Server</p>

  <hr />

  <b>Databases:</b>
  <ul>
    <li>Connect and Communicate with a MySQL Database</li>
    <li>Adding Data to the Database</li>
    <li>CRUD Operations</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Working with any other database</p>

  <hr />

  <b style={{color:'purple'}}>Introduction to React.js:</b>
  <ul>
    <li>Setting up React Environment</li>
    <li>Create React App</li>
    <li>Hello World</li>
    <li>Understanding JSX</li>
  </ul>
  <p><b>Self-Learning Topics:</b> XML</p>

  <hr />

  <b>Components and Events:</b>
  <ul>
    <li>Component Life Cycle</li>
    <li>Functional Class and Rendering Components</li>
    <li>Components in Files</li>
    <li>Props:</li>
    <ul>
      <li>React Props</li>
      <li>Passing and Accessing Props</li>
    </ul>
    <li>DOM Events:</li>
    <ul>
      <li>Click</li>
      <li>Change</li>
      <li>Blur</li>
      <li>Keyup</li>
    </ul>
  </ul>
  <p><b>Self-Learning Topics:</b> CSS, SCSS</p>

  <hr />

  <b>Forms, Hooks and Routing:</b>
  <ul>
    <li>Forms:</li>
    <ul>
      <li>Handling User Input with Forms</li>
      <li>Form Validation Techniques</li>
    </ul>
    <li>Hooks:</li>
    <ul>
      <li>useState</li>
      <li>useEffect</li>
      <li>useContext</li>
    </ul>
    <li>React Router</li>
  </ul>
  <p><b>Self-Learning Topics:</b> Custom Hooks</p>
  <div className="numbered">
  <details>
    <summary className="practicals">WT Practicals</summary>
    <ol>
      <li>Create an application to demonstrate Node.js Modules</li>
      <li>Create an application to demonstrate various Node.js Events</li>
      <li>Create an application to demonstrate Node.js Functions</li>
      <li>Using File Handling demonstrate all basic file operations (Create, write, read, delete)</li>
      <li>Create an HTTP Server and perform operations on it</li>
      <li>Create an application to establish a connection with the MySQL database and perform basic database operations on it</li>
      <li>Create an application in ReactJS to implement component life cycle</li>
      <li>Create an application to implement class and functional component in ReactJS</li>
      <li>Create an application in ReactJS to import and export the files (components)</li>
      <li>Create an application to implement state and props</li>
      <li>Create an application in ReactJS to use DOM events</li>
      <li>Create an application in ReactJS form and add client and server side validation</li>
      <li>Create an application to implement React Hooks</li>
      <li>Create SPA using React Router</li>
    </ol>
  </details>
  </div>

</details>
<hr className="sub-hr"></hr>
      </div>
    </div>
  );
}
