export interface Post {
  slug: string;
  title: string;
  chapter: string;
  description: string;
  category: string;
  readTime: string;
  affiliateCallout: {
    title: string;
    description: string;
    link: string;
    buttonText: string;
  };
  content: string;
}

export const POSTS: Post[] = [
  {
    slug: "chapter-1-computers-and-logic",
    title: "From Logic to Execution: A Practical Mental Model for Software Architecture",
    chapter: "Chapter 1",
    category: "Architecture",
    readTime: "7 min read",
    description: "Learn how the CPU, memory, and data hierarchy work together to transform logic into execution.",
    affiliateCallout: {
      title: "Recommended Developer Infrastructure",
      description: "Host your high-performance web applications and backend APIs on Namecheap Shared & VPS Hosting.",
      link: "https://www.namecheap.com/",
      buttonText: "Explore Namecheap Hosting"
    },
    content: `
# From Logic to Execution: A Practical Mental Model for Software Architecture

In web and software development, rushing to write syntax without a clearly mapped execution logic often results in subtle runtime bugs, poor memory usage, and costly refactoring.

## 1. Hardware, Memory, and Data Hierarchy
Understanding how high-level languages interact with hardware components is crucial for writing performant applications:

- **Bit**: 0 or 1
- **Byte**: 8 bits (e.g., ASCII character 'A' = 01000001)
- **Field**: Named memory location / variable
- **Record**: Group of related fields
- **File**: Collection of records
- **Database**: Collection of related files and schemas

## 2. Program Execution Lifecycle
Building reliable software follows a six-step lifecycle:
1. **Understand the Problem**: Boundary mapping.
2. **Plan the Logic**: Flowcharts & pseudocode.
3. **Code the Program**: High-level syntax.
4. **Translate**: Compiler / Virtual Machine execution.
5. **Test**: QA, automated integration tests.
6. **Deploy**: Production CI/CD pipelines.
    `
  },
  {
    slug: "chapter-16-relational-databases",
    title: "Relational Database Architecture: Normalization, Integrity, and Concurrency",
    chapter: "Chapter 16",
    category: "Databases",
    readTime: "10 min read",
    description: "Build production-grade database schemas using 3NF normalization, foreign key constraints, and transactional locks.",
    affiliateCallout: {
      title: "Register Your Custom Domain Today",
      description: "Secure your .org, .com, or .dev domain name instantly on Namecheap with free Privacy Protection.",
      link: "https://www.namecheap.com/domains/",
      buttonText: "Find Your Domain on Namecheap"
    },
    content: `
# Relational Database Architecture: Normalization, Integrity, and Concurrency

Modern applications rely on persistent, well-structured storage to manage complex datasets efficiently.

## 1. The Normalization Progression
- **1NF**: Ensures atomic column values and eliminates repeating groups.
- **2NF**: Satisfies 1NF and removes partial key dependencies.
- **3NF**: Satisfies 2NF and eliminates transitive dependencies.

## 2. Entity Relationships
- **One-to-One (1:1)**: User <---> UserProfile
- **One-to-Many (1:N)**: Customer <---> Orders
- **Many-to-Many (N:M)**: Students <---> Courses (via Junction Table)
    `
  }
];