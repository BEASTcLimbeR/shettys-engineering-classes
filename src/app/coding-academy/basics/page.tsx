"use client";

import React from 'react';
import { Box, Typography, Container, Paper, Accordion, AccordionSummary, AccordionDetails, AppBar, Toolbar, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BasicsPage: React.FC = () => {
  const router = useRouter();

  const cNotes = [
    {
      title: "Introduction to C Programming",
      content: `C is a general-purpose programming language developed by Dennis Ritchie in 1972.

Key Features:
• Procedural programming language
• Low-level memory access
• Simple and efficient
• Portable across platforms

Basic Structure:
\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}
\`\`\``
    },
    {
      title: "Variables and Data Types",
      content: `C supports various data types:

• int - Integer numbers
• float - Decimal numbers
• char - Single characters
• double - Double precision decimals

Example:
\`\`\`c
int age = 25;
float salary = 50000.50;
char grade = 'A';
double pi = 3.14159;
\`\`\``
    },
    {
      title: "Control Structures",
      content: `C provides several control structures:

1. If-else statements
2. Loops (for, while, do-while)
3. Switch statements

Example:
\`\`\`c
if (age >= 18) {
    printf("Adult");
} else {
    printf("Minor");
}

for (int i = 0; i < 10; i++) {
    printf("%d\\n", i);
}
\`\`\``
    },
    {
      title: "Functions",
      content: `Functions are blocks of code that perform specific tasks.

Syntax:
\`\`\`c
return_type function_name(parameters) {
    // function body
    return value;
}

Example:
int add(int a, int b) {
    return a + b;
}
\`\`\``
    },
    {
      title: "Arrays",
      content: `Arrays store multiple values of the same type.

Declaration:
\`\`\`c
int numbers[5] = {1, 2, 3, 4, 5};
\`\`\`

Accessing elements:
\`\`\`c
printf("%d", numbers[0]); // prints 1
\`\`\``
    },
    {
      title: "Pointers",
      content: `Pointers store memory addresses of variables.

Declaration:
\`\`\`c
int *ptr;
int number = 10;
ptr = &number; // ptr stores address of number
\`\`\`

Dereferencing:
\`\`\`c
printf("%d", *ptr); // prints value at address
\`\`\``
    }
  ];

  const cppNotes = [
    {
      title: "Introduction to C++",
      content: `C++ is an extension of C with object-oriented features.

Key Features:
• Object-Oriented Programming
• Classes and Objects
• Inheritance and Polymorphism
• Templates and STL

Basic Structure:
\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\``
    },
    {
      title: "Classes and Objects",
      content: `Classes are user-defined data types.

Example:
\`\`\`cpp
class Student {
private:
    string name;
    int age;
    
public:
    Student(string n, int a) {
        name = n;
        age = a;
    }
    
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};
\`\`\``
    },
    {
      title: "Inheritance",
      content: `Inheritance allows a class to inherit properties from another class.

Example:
\`\`\`cpp
class Person {
protected:
    string name;
public:
    Person(string n) : name(n) {}
};

class Student : public Person {
private:
    int rollNo;
public:
    Student(string n, int r) : Person(n), rollNo(r) {}
};
\`\`\``
    },
    {
      title: "Polymorphism",
      content: `Polymorphism allows different classes to be treated as instances of the same class.

Example:
\`\`\`cpp
class Shape {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Circle : public Shape {
public:
    void draw() {
        cout << "Drawing Circle" << endl;
    }
};
\`\`\``
    },
    {
      title: "Templates",
      content: `Templates allow generic programming.

Example:
\`\`\`cpp
template <typename T>
T add(T a, T b) {
    return a + b;
}

// Usage
int result1 = add<int>(5, 3);
double result2 = add<double>(5.5, 3.2);
\`\`\``
    },
    {
      title: "STL (Standard Template Library)",
      content: `STL provides ready-to-use data structures and algorithms.

Common containers:
• vector - Dynamic arrays
• list - Doubly linked list
• map - Key-value pairs
• set - Unique elements

Example:
\`\`\`cpp
#include <vector>
#include <algorithm>

vector<int> numbers = {3, 1, 4, 1, 5};
sort(numbers.begin(), numbers.end());
\`\`\``
    }
  ];

  const dsaNotes = [
    {
      title: "Introduction to Data Structures",
      content: `Data structures are ways of organizing and storing data.

Types:
• Linear: Arrays, Linked Lists, Stacks, Queues
• Non-linear: Trees, Graphs
• Hash Tables

Importance:
• Efficient data organization
• Fast data access and modification
• Memory optimization`
    },
    {
      title: "Arrays",
      content: `Arrays store elements in contiguous memory.

Types:
• One-dimensional arrays
• Multi-dimensional arrays

Operations:
• Access: O(1)
• Search: O(n)
• Insert/Delete: O(n)

Example:
\`\`\`cpp
int arr[5] = {1, 2, 3, 4, 5};
// Access element
int element = arr[2]; // 3
\`\`\``
    },
    {
      title: "Linked Lists",
      content: `Linked lists store elements in nodes with pointers.

Types:
• Singly Linked List
• Doubly Linked List
• Circular Linked List

Advantages:
• Dynamic size
• Easy insertion/deletion

Disadvantages:
• No random access
• Extra memory for pointers

Example:
\`\`\`cpp
struct Node {
    int data;
    Node* next;
    Node(int val) : data(val), next(nullptr) {}
};
\`\`\``
    },
    {
      title: "Stacks",
      content: `Stack follows LIFO (Last In First Out) principle.

Operations:
• push() - Add element
• pop() - Remove element
• peek() - View top element
• isEmpty() - Check if empty

Applications:
• Function call stack
• Undo operations
• Expression evaluation

Example:
\`\`\`cpp
#include <stack>
stack<int> s;
s.push(10);
s.push(20);
int top = s.top(); // 20
s.pop(); // removes 20
\`\`\``
    },
    {
      title: "Queues",
      content: `Queue follows FIFO (First In First Out) principle.

Types:
• Simple Queue
• Circular Queue
• Priority Queue

Operations:
• enqueue() - Add element
• dequeue() - Remove element
• front() - View front element

Applications:
• Process scheduling
• Breadth-first search
• Print spooling

Example:
\`\`\`cpp
#include <queue>
queue<int> q;
q.push(10);
q.push(20);
int front = q.front(); // 10
q.pop(); // removes 10
\`\`\``
    },
    {
      title: "Trees",
      content: `Trees are hierarchical data structures.

Types:
• Binary Tree
• Binary Search Tree
• AVL Tree
• Red-Black Tree

Tree Traversals:
• Inorder (Left-Root-Right)
• Preorder (Root-Left-Right)
• Postorder (Left-Right-Root)

Example:
\`\`\`cpp
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};
\`\`\``
    },
    {
      title: "Graphs",
      content: `Graphs represent relationships between objects.

Types:
• Directed Graph
• Undirected Graph
• Weighted Graph

Representation:
• Adjacency Matrix
• Adjacency List

Traversal:
• Depth-First Search (DFS)
• Breadth-First Search (BFS)

Applications:
• Social networks
• Navigation systems
• Network routing`
    },
    {
      title: "Algorithms",
      content: `Algorithms are step-by-step procedures for solving problems.

Types:
• Sorting Algorithms
• Searching Algorithms
• Graph Algorithms
• Dynamic Programming

Common Algorithms:
• Bubble Sort - O(n²)
• Quick Sort - O(n log n)
• Binary Search - O(log n)
• Dijkstra's Algorithm - O(V²)

Example (Binary Search):
\`\`\`cpp
int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
\`\`\``
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#ffffff',
        color: '#212529',
        position: 'relative',
      }}
    >
      {/* Navigation Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          background: '#ffffff',
          borderBottom: '1px solid #e9ecef',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1000,
        }}
      >
        <Toolbar>
          <Button
            onClick={() => router.push('/coding-academy')}
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#495057',
              fontWeight: 600,
              '&:hover': { color: '#212529' },
            }}
          >
            Back to Academy
          </Button>
          
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: '#212529',
              ml: 2,
            }}
          >
            Programming Basics - C, C++, DSA
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: '80px' }}>
        <Container maxWidth="xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                py: 8,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 3,
                mb: 6,
                color: 'white',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  fontWeight: 900,
                  mb: 3,
                }}
              >
                Programming Basics
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Master C, C++, and Data Structures & Algorithms
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CodeIcon />
                  <Typography>C Programming</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MemoryIcon />
                  <Typography>C++ Programming</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SchoolIcon />
                  <Typography>Data Structures & Algorithms</Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Learning Path */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Box sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  mb: 6,
                  color: '#212529',
                  fontWeight: 700,
                }}
              >
                Learning Path
              </Typography>
              
              <Grid container spacing={4}>
                <Grid xs={12} md={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 3,
                      border: '2px solid #e9ecef',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ color: '#28a745', fontSize: '3rem', mb: 2 }}>
                      <CodeIcon />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      Step 1: C Programming
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d' }}>
                      Learn the fundamentals of programming with C. Master variables, control structures, functions, arrays, and pointers.
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid xs={12} md={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 3,
                      border: '2px solid #e9ecef',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ color: '#007bff', fontSize: '3rem', mb: 2 }}>
                      <MemoryIcon />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      Step 2: C++ Programming
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d' }}>
                      Advance to object-oriented programming with C++. Learn classes, inheritance, polymorphism, templates, and STL.
                    </Typography>
                  </Paper>
                </Grid>
                
                <Grid xs={12} md={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      borderRadius: 3,
                      border: '2px solid #e9ecef',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ color: '#ffc107', fontSize: '3rem', mb: 2 }}>
                      <SchoolIcon />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      Step 3: Data Structures & Algorithms
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6c757d' }}>
                      Master data structures and algorithms. Learn arrays, linked lists, trees, graphs, and algorithmic techniques.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </motion.div>

          {/* C Programming Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Box sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <CodeIcon sx={{ fontSize: '3rem', color: '#28a745', mr: 2 }} />
                <Typography
                  variant="h3"
                  sx={{
                    color: '#212529',
                    fontWeight: 700,
                  }}
                >
                  C Programming Fundamentals
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {cNotes.map((note, index) => (
                  <Grid xs={12} lg={6} key={index}>
                    <Accordion
                      sx={{
                        mb: 2,
                        border: '1px solid #e9ecef',
                        borderRadius: 2,
                        '&:before': { display: 'none' },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            margin: '12px 0',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <PlayArrowIcon sx={{ color: '#28a745' }} />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#212529',
                            }}
                          >
                            {note.title}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body1"
                          sx={{
                            lineHeight: 1.8,
                            color: '#495057',
                            whiteSpace: 'pre-line',
                            fontFamily: 'monospace',
                          }}
                        >
                          {note.content}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* C++ Programming Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Box sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <MemoryIcon sx={{ fontSize: '3rem', color: '#007bff', mr: 2 }} />
                <Typography
                  variant="h3"
                  sx={{
                    color: '#212529',
                    fontWeight: 700,
                  }}
                >
                  C++ Programming Advanced
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {cppNotes.map((note, index) => (
                  <Grid xs={12} lg={6} key={index}>
                    <Accordion
                      sx={{
                        mb: 2,
                        border: '1px solid #e9ecef',
                        borderRadius: 2,
                        '&:before': { display: 'none' },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            margin: '12px 0',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <PlayArrowIcon sx={{ color: '#007bff' }} />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#212529',
                            }}
                          >
                            {note.title}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body1"
                          sx={{
                            lineHeight: 1.8,
                            color: '#495057',
                            whiteSpace: 'pre-line',
                            fontFamily: 'monospace',
                          }}
                        >
                          {note.content}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* DSA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Box sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <SchoolIcon sx={{ fontSize: '3rem', color: '#ffc107', mr: 2 }} />
                <Typography
                  variant="h3"
                  sx={{
                    color: '#212529',
                    fontWeight: 700,
                  }}
                >
                  Data Structures & Algorithms
                </Typography>
              </Box>
              
              <Grid container spacing={3}>
                {dsaNotes.map((note, index) => (
                  <Grid xs={12} lg={6} key={index}>
                    <Accordion
                      sx={{
                        mb: 2,
                        border: '1px solid #e9ecef',
                        borderRadius: 2,
                        '&:before': { display: 'none' },
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            margin: '12px 0',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <PlayArrowIcon sx={{ color: '#ffc107' }} />
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#212529',
                            }}
                          >
                            {note.title}
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography
                          variant="body1"
                          sx={{
                            lineHeight: 1.8,
                            color: '#495057',
                            whiteSpace: 'pre-line',
                            fontFamily: 'monospace',
                          }}
                        >
                          {note.content}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>

          {/* Practice Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <Box sx={{ mb: 8 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 6,
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>
                  Ready to Practice?
                </Typography>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                  Apply what you've learned with hands-on coding exercises and projects
                </Typography>
                
                <List sx={{ textAlign: 'left', maxWidth: 600, mx: 'auto' }}>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Complete coding challenges for each topic" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Build real-world projects using C and C++" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Solve algorithmic problems with data structures" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    <ListItemText primary="Participate in coding contests and competitions" />
                  </ListItem>
                </List>
                
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 4,
                    px: 6,
                    py: 2,
                    background: 'white',
                    color: '#667eea',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    borderRadius: '8px',
                    '&:hover': {
                      background: '#f8f9fa',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  Start Practicing Now
                </Button>
              </Paper>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default BasicsPage; 