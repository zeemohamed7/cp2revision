// CHAPTER DATA
const chapters = [
  {
    name: "Chapter 5: Interfaces and Abstract Classes",
    videos: [
      {
        title: "Java interface 🦅",
        url: "https://www.youtube.com/watch?v=GhslBwrRsnw&ab_channel=BroCode",
      },
      {
        title: "Java abstraction 👻",
        url: "https://www.youtube.com/watch?v=Lvnb83qt57g&ab_channel=BroCode",
      },
      {
        title: "Abstract Classes and Methods in Java Explained in 7 Minutes",
        url: "https://www.youtube.com/watch?v=HvPlEJ3LHgE&t=1s&ab_channel=CodingwithJohn",
      },
    ],
    questions: [
      {
        question:
          "Which of the following is true about a class that implements an interface but doesn't implement all its methods?",
        options: [
          "It will run without error.",
          "It must be declared abstract.",
          "It must extend another class.",
          "It cannot compile.",
        ],
        answer: 1,
      },
      {
        question: "What is the primary purpose of interfaces in Java?",
        options: [
          "To provide constructors to subclasses",
          "To support encapsulation",
          "To enforce a contract for unrelated classes",
          "To declare constants only",
        ],
        answer: 2,
      },
      {
        question: "Which keyword is used to create an abstract method in Java?",
        options: ["abstract", "virtual", "override", "static"],
        answer: 0,
      },
      {
        question:
          "What happens if a concrete class fails to implement all methods of an interface?",
        options: [
          "It becomes static.",
          "It will compile but throw an exception at runtime.",
          "It must be marked abstract or it won't compile.",
          "It inherits the methods automatically.",
        ],
        answer: 2,
      },
      {
        question:
          "Which of the following is true about default methods in interfaces?",
        options: [
          "They are static by default.",
          "They must be overridden.",
          "They provide a method body and can be optionally overridden.",
          "They are not allowed since Java 8.",
        ],
        answer: 2,
      },
      {
        question: "Why does Java disallow multiple class inheritance?",
        options: [
          "It slows down execution.",
          "To prevent method and variable resolution ambiguity.",
          "Java doesn't support inheritance.",
          "It would require static methods.",
        ],
        answer: 1,
      },
      {
        question: "Which of the following can an interface contain?",
        options: [
          "Instance variables",
          "Constructors",
          "Abstract methods and default/static methods",
          "Private instance methods",
        ],
        answer: 2,
      },
      {
        question: "What is the key limitation of an anonymous class?",
        options: [
          "It can’t access methods.",
          "It can’t be reused because it has no name.",
          "It can't be created inside a method.",
          "It doesn't support inheritance.",
        ],
        answer: 1,
      },
      {
        question: `Which method must be implemented in the following interface?\`\`\` \n\ninterface Walkable {\n  void walk();\n} \`\`\``,
        options: [
          "No methods",
          "Only if the class is abstract",
          "walk() in all implementing classes",
          "A constructor",
        ],
        answer: 2,
      },
      {
        question:
          "What is the purpose of using interfaces in place of abstract classes?",
        options: [
          "To define shared attributes",
          "To enforce unrelated classes to follow the same method structure",
          "To prevent overriding",
          "To support constructors in multiple classes",
        ],
        answer: 1,
      },
      {
        question:
          "What happens if two interfaces implemented by a class have default methods with the same name?",
        options: [
          "It results in a compile-time error unless overridden.",
          "The first one is used.",
          "Only one of them is inherited.",
          "The compiler chooses the most specific one.",
        ],
        answer: 0,
      },
      {
        question: "Which of the following best describes a static inner class?",
        options: [
          "It has access to all private members of the outer class.",
          "It is tied to an instance of the outer class.",
          "It has no access to instance members of the outer class.",
          "It must be abstract.",
        ],
        answer: 2,
      },
      {
        question: "Why can’t interfaces have constructors?",
        options: [
          "They don't support inheritance.",
          "They are not instantiated.",
          "They must be final.",
          "Java doesn't allow method overloading in interfaces.",
        ],
        answer: 1,
      },
      {
        question:
          "Which scenario justifies the use of an abstract class over an interface?",
        options: [
          "When the classes share no relationship",
          "When common state and behavior must be shared",
          "When only method signatures are required",
          "When you need to implement multiple behaviors",
        ],
        answer: 1,
      },
      {
        question:
          "How can a class use a method from one of two interfaces with conflicting default methods?",
        options: [
          "Override the method in the class and use InterfaceName.super.methodName()",
          "Use 'this' keyword to call the method",
          "Let the compiler decide",
          "Mark the method as static",
        ],
        answer: 0,
      },
      {
        question: "Which of the following is allowed in an interface?",
        options: [
          "Private abstract methods",
          "Static methods with a body",
          "Constructors",
          "Instance fields",
        ],
        answer: 1,
      },
      {
        question:
          `What type of class is this?\`\`\`\n\nnew Runnable() {\n  public void run() {\n    System.out.println("Running");\n  }\n};\`\`\``,
        options: [
          "Named subclass of Thread",
          "Lambda expression",
          "Anonymous class implementing Runnable",
          "Static inner class",
        ],
        answer: 2,
      },
      {
        question: "Which statement about abstract classes is true?",
        options: [
          "They must not have any methods.",
          "They can have both abstract and concrete methods.",
          "They can't be subclassed.",
          "They can only be used with interfaces.",
        ],
        answer: 1,
      },
      {
        question: "Which scenario is NOT a good use of interfaces?",
        options: [
          "Enforcing unrelated classes to have common behavior",
          "Sharing implementation logic across subclasses",
          "Defining common APIs",
          "Enabling polymorphism across different types",
        ],
        answer: 1,
      },
      {
        question:
          "Which modifier(s) are implicitly added to all interface methods (before Java 8)?",
        options: [
          "private and abstract",
          "public and static",
          "public and abstract",
          "protected and abstract",
        ],
        answer: 2,
      },
      {
        question:
          `Which of the following is true about class B in this code?\`\`\` \n\n interface A {\n  void methodA();\n}\nabstract class B implements A {\n  public void methodB() {}\n}\`\`\``,
        options: [
          "Class B must be declared final",
          "Class B must implement methodA()",
          "Class B must be declared abstract",
          "Interface A cannot be extended by class B",
        ],
        answer: 2,
      },
      {
        question:
          "You want only some animals to have 'play' and 'beFriendly' methods. What's the best design?",
        options: [
          "Put those methods in the Animal superclass",
          "Use an abstract Pet class and extend it",
          "Add the methods to Dog and Cat only",
          "Create a Pet interface and have only pet classes implement it",
        ],
        answer: 3,
      },
      {
        question:
          "Why might putting pet behavior methods directly in the Animal superclass be poor design?",
        options: [
          "Java doesn't allow methods in superclasses",
          "It violates encapsulation",
          "Non-pet animals would inherit irrelevant behavior",
          "Interfaces can't be accessed by superclasses",
        ],
        answer: 2,
      },
      {
        question:
          "What design issue is avoided by using interfaces instead of multiple class inheritance?",
        options: [
          "Runtime exceptions",
          "Overriding constructors",
          "Variable hiding",
          "Method resolution ambiguity",
        ],
        answer: 3,
      },
      {
        question: "Which of the following will compile successfully?",
        options: [
          "A class implementing two interfaces with conflicting default methods",
          "A concrete class not implementing all methods of its interface",
          "An interface with a constructor",
          "A static method defined in an interface",
        ],
        answer: 3,
      },
      {
        question: `What will this code output?

\`\`\`
interface Swimmable {
  void swim();
  default void dive() { System.out.println("Diving"); }
}
class Fish implements Swimmable {
  public void swim() { System.out.println("Swimming"); }
}
new Fish().dive();
\`\`\`
`,
        options: [
          "Compilation error",
          "Swimming",
          "Diving",
          "Runtime exception",
        ],
        answer: 2,
      },

      {
        question: "Which statement about inner classes is FALSE?",
        options: [
          "Non-static inner classes can access private members of the outer class",
          "Static inner classes are tied to an instance of the outer class",
          "Static inner classes cannot access non-static members of the outer class",
          "Anonymous classes are used for single-use implementations",
        ],
        answer: 1,
      },
      {
        question:
          "Which of these best explains why Java avoids multiple inheritance with classes?",
        options: [
          "To prevent deep inheritance trees",
          "Because it doesn't support interfaces",
          "To avoid method/variable ambiguity",
          "To increase speed",
        ],
        answer: 2,
      },
      {
        question:
          `What is true about this code?\`\`\` \n\nRunnable r = new Runnable() {\n  public void run() {\n    System.out.println("Running!");\n  }\n};\`\`\` `,
        options: [
          "Defines a new class RunnableImpl",
          "Creates a subclass of Thread",
          "Instantiates an anonymous class implementing Runnable",
          "Causes a compile-time error",
        ],
        answer: 2,
      },
      {
        question:
          "What is the key advantage of interfaces over abstract classes?",
        options: [
          "Easier debugging",
          "Interfaces support constructors",
          "Polymorphism across unrelated classes",
          "Interfaces can’t be extended",
        ],
        answer: 2,
      },
    ],
  },

  {
    name: "Chapter 6: GUI and Event Handling",
    videos: [
      {
        title: "Java GUI Tutorial - Make a GUI in 13 Minutes #9",
        url: "https://www.youtube.com/watch?v=5o3fMLPY7qY&t=6s&ab_channel=AlexLee",
      },
    ],
    questions: [
      {
        question:
          "Which package in Java provides the more modern and sophisticated GUI components?",
        options: ["java.util", "java.awt", "javax.awt", "javax.swing"],
        answer: 3,
      },
      {
        question:
          "What is the purpose of the `JOptionPane.showMessageDialog()` method?",
        options: [
          "To create a custom window",
          "To prompt the user for input",
          "To display a message in a dialog box",
          "To close the application",
        ],
        answer: 2,
      },
      {
        question:
          "Which component is used in Java Swing to create a container window?",
        options: ["JPanel", "JLabel", "JFrame", "JWindow"],
        answer: 2,
      },
      {
        question: "What is the default layout manager for a JPanel?",
        options: ["GridLayout", "BorderLayout", "FlowLayout", "BoxLayout"],
        answer: 2,
      },
      {
        question:
          "Which Swing component allows for entering a single line of text?",
        options: ["JTextArea", "JLabel", "JTextField", "JCheckBox"],
        answer: 2,
      },
      {
        question:
          "What does the `setVisible(true)` method do in a Swing application?",
        options: [
          "Hides the component",
          "Initializes the component",
          "Displays the component on screen",
          "Destroys the component",
        ],
        answer: 2,
      },
      {
        question:
          "What is the function of a `ButtonGroup` when used with JRadioButton components?",
        options: [
          "Groups buttons by layout",
          "Ensures only one button in the group can be selected",
          "Enables checkboxes",
          "Sets font and color for the buttons",
        ],
        answer: 1,
      },
      {
        question:
          "Which layout manager arranges components in rows and columns of equal size?",
        options: ["FlowLayout", "BorderLayout", "GridLayout", "BoxLayout"],
        answer: 2,
      },
      {
        question: "Which method retrieves the text from a `JTextField`?",
        options: ["getValue()", "getText()", "retrieveText()", "fetchInput()"],
        answer: 1,
      },
      {
        question:
          "What are the two fundamental types of GUI components in Java?",
        options: [
          "Text and Images",
          "Buttons and Labels",
          "Basic Components and Containers",
          "Panels and Layouts",
        ],
        answer: 2,
      },
      {
        question:
          "Which of the following statements correctly distinguishes between a component and a container in Java Swing?",
        options: [
          "Containers are visual elements while components are non-visual.",
          "Components manage the layout of containers.",
          "Components are added to containers; containers organize and hold components.",
          "Components inherit from containers.",
        ],
        answer: 2,
      },
      {
        question:
          "What will happen if you add multiple components to a JFrame without setting a layout manager?",
        options: [
          "The components will overlap since no layout controls positioning.",
          "The components will be evenly spaced.",
          "The last added component will be automatically centered.",
          "Java will throw a runtime exception.",
        ],
        answer: 0,
      },
      {
        question:
          "Why is it important to group JRadioButtons using ButtonGroup?",
        options: [
          "It makes them display vertically.",
          "It ensures only one can be selected at a time.",
          "It enables event handling for them.",
          "It sets default text for each button.",
        ],
        answer: 1,
      },
      {
        question:
          "Which method of the Component class would you use to move a component to a new position inside its container?",
        options: ["setBounds()", "setLocation()", "setPosition()", "moveTo()"],
        answer: 1,
      },
      {
        question:
          "Which layout manager would you use to precisely place components in NORTH, SOUTH, EAST, WEST and CENTER?",
        options: ["GridLayout", "FlowLayout", "BorderLayout", "BoxLayout"],
        answer: 2,
      },
      {
        question:
          "What distinguishes an abstract class like JComponent from a concrete class like JButton?",
        options: [
          "Abstract classes cannot inherit methods.",
          "You can instantiate abstract classes directly.",
          "Concrete classes cannot override methods.",
          "Abstract classes must be extended to be used; concrete classes can be instantiated.",
        ],
        answer: 3,
      },
      {
        question:
          "Which of the following is true regarding the default behavior of FlowLayout?",
        options: [
          "It aligns components to the right edge of the container.",
          "It places components in a grid with equal sizes.",
          "It lays out components left to right and wraps when necessary.",
          "It requires all components to be the same width.",
        ],
        answer: 2,
      },
      {
        question: "What does the getSelectedItem() method of JComboBox return?",
        options: [
          "The index of the selected item.",
          "A string representing the first item in the list.",
          "The object currently selected in the combo box.",
          "The total number of items in the combo box.",
        ],
        answer: 2,
      },
      {
        question:
          "If you want to create a text label that cannot be edited by the user, which component should you use?",
        options: ["JTextField", "JLabel", "JTextArea", "JPasswordField"],
        answer: 1,
      },
      {
        question:
          "What would happen if setVisible(true) is not called on a JFrame after creating it?",
        options: [
          "It will display by default.",
          "Only its components will be visible.",
          "The frame will not be displayed on screen.",
          "The program will throw an exception.",
        ],
        answer: 2,
      },
      {
        question: "What is the role of a Listener in Java event handling?",
        options: [
          "To display GUI elements",
          "To generate events",
          "To respond to events generated by sources",
          "To layout GUI components",
        ],
        answer: 2,
      },
      {
        question:
          "Which method must be implemented by a class that implements ActionListener?",
        options: [
          "itemStateChanged(ActionEvent e)",
          "mouseClicked(MouseEvent e)",
          "windowClosing(WindowEvent e)",
          "actionPerformed(ActionEvent e)",
        ],
        answer: 3,
      },
      {
        question: "What is the purpose of getSource() in event handling?",
        options: [
          "To retrieve the GUI component's layout",
          "To determine which listener received the event",
          "To identify the source object of the event",
          "To register a new event listener",
        ],
        answer: 2,
      },
      {
        question:
          "Which of the following is true about an Adapter class in AWT?",
        options: [
          "It provides default empty implementations of all methods in a listener interface",
          "It adds listeners to all components",
          "It replaces the use of listener interfaces",
          "It cannot be extended",
        ],
        answer: 0,
      },
      {
        question:
          "What happens when you click a JButton that has an ActionListener registered?",
        options: [
          "Nothing unless the button is visible",
          "windowClosing() is called",
          "actionPerformed() is called on the listener",
          "The application exits by default",
        ],
        answer: 2,
      },
      {
        question:
          "Which interface should you implement to handle window close operations?",
        options: [
          "ActionListener",
          "ItemListener",
          "MouseListener",
          "WindowListener",
        ],
        answer: 3,
      },
      {
        question: "In Java event handling, what role does the source play?",
        options: [
          "It handles the event",
          "It generates the event",
          "It registers the listener",
          "It displays the result",
        ],
        answer: 1,
      },
      {
        question: "Which Java class is used to represent button click events?",
        options: ["WindowEvent", "ItemEvent", "ActionEvent", "MouseEvent"],
        answer: 2,
      },
      {
        question:
          "In the publisher-subscriber model, the publisher is also known as:",
        options: ["Handler", "Source", "Adapter", "Listener"],
        answer: 1,
      },
      {
        question: "To stop receiving events from a source, a listener must:",
        options: [
          "Delete the source",
          "Destroy the listener",
          "Unsubscribe from the source",
          "Close the GUI",
        ],
        answer: 2,
      },
      {
        question: "Which method is used to register a listener to a button?",
        options: [
          "registerListener()",
          "setActionListener()",
          "onClick()",
          "addActionListener()",
        ],
        answer: 3,
      },
      {
        question:
          "What is the purpose of using anonymous inner classes in event handling?",
        options: [
          "To define reusable event handlers",
          "To write shorter code for simple listeners",
          "To avoid syntax errors",
          "To avoid using GUI components",
        ],
        answer: 1,
      },
      {
        question:
          "Which interface must you implement to handle checkbox state changes?",
        options: [
          "ActionListener",
          "ItemListener",
          "WindowListener",
          "MouseListener",
        ],
        answer: 1,
      },
      {
        question:
          "What is the correct method signature for handling ActionEvents?",
        options: [
          "public void itemStateChanged(ItemEvent e)",
          "public void actionPerformed(ActionEvent e)",
          "public void windowClosing(WindowEvent e)",
          "public void mouseClicked(MouseEvent e)",
        ],
        answer: 1,
      },
      {
        question:
          "What advantage does a WindowAdapter provide over WindowListener?",
        options: [
          "It is easier to register",
          "It requires implementing fewer methods",
          "It supports more events",
          "It runs faster",
        ],
        answer: 1,
      },
      {
        question:
          "What does the following line do: `frame.addWindowListener(listener);`?",
        options: [
          "Adds a button to a frame",
          "Removes a listener from the frame",
          "Registers a listener for window events",
          "Closes the frame automatically",
        ],
        answer: 2,
      },
    ],
  },
  {
    name: "Chapter 7: Exceptions and File IO",
    videos: [
      {
        title: "Exception Handling in Java Tutorial",
        url: "https://www.youtube.com/watch?v=1XAfapkBQjk&ab_channel=CodingwithJohn",
      },
      {
        title:
          "Checked vs. Unchecked Exceptions in Java Tutorial - What's The Difference?",
        url: "https://www.youtube.com/watch?v=bCPClyGsVhc&ab_channel=CodingwithJohn",
      },
      {
        title: "Java Exception Handling Tutorial",
        url: "https://www.youtube.com/watch?v=_nmm0nZqIIY&ab_channel=ProgrammingwithMosh",
      },
      {
        title: "Input & Output Streams In Java",
        url: "https://www.youtube.com/watch?v=e3dFoA4-tqs&ab_channel=SimpliCode",
      },
      {
        title: "Java serialization 🥣",
        url: "https://www.youtube.com/watch?v=DfbFTVNfkeI&ab_channel=BroCode",
      },
    ],
    questions: [
      {
        question:
          `What will the following code output?\`\`\` \n\ntry {\n  int a = 5 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Error");\n}\`\`\``,
        options: ["0", "No output", "Error", "Compilation error"],
        answer: 2,
      },
      {
        question:
          "What does the following method signature indicate?\`\`\` \n\npublic void readFile() throws IOException \`\`\` ",
        options: [
          "The method handles IOExceptions internally",
          "The method cannot be compiled",
          "The method declares that it may throw an IOException",
          "The method must contain a Scanner",
        ],
        answer: 2,
      },
      {
        question:
          'Which line will cause a compilation error?\`\`\` \n\ntry {\n  FileInputStream f = new FileInputStream("file.txt");\n} catch (Exception e) {\n  System.out.println("Caught");\n}\`\`\` ',
        options: [
          "Line with FileInputStream",
          "Line with try",
          "Line with catch",
          "No error, it compiles",
        ],
        answer: 3,
      },
      {
        question:
          'What happens here?\`\`\` \n\nObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("data.ser"));\nout.writeObject(new Student()); \`\`\` ',
        options: [
          "Object is written to file",
          "Compilation error",
          "Object is not written",
          "Only primitive fields are written",
        ],
        answer: 0,
      },
      {
        question:
          "What exception does this code throw?\`\`\` \n\nint[] arr = new int[3];\nSystem.out.println(arr[5]);\`\`\` ",
        options: [
          "NullPointerException",
          "IOException",
          "ArrayIndexOutOfBoundsException",
          "No exception",
        ],
        answer: 2,
      },
      {
        question:
          'What is printed?\`\`\` \n\nfinally {\n  System.out.println("Done");\n}\`\`\` ',
        options: [
          "Only if exception occurs",
          "Only if no exception",
          "Always prints Done",
          "Never runs",
        ],
        answer: 2,
      },
      {
        question:
          "What does the following code do?\`\`\` \n\ncatch (Exception e) {\n  throw e;\n}\`\`\` ",
        options: [
          "Ignores the error",
          "Prints the error",
          "Re-throws the caught exception",
          "Fixes the error",
        ],
        answer: 2,
      },
      {
        question:
          "Which line causes an unchecked exception?\`\`\` \n\nString s = null;\ns.length();\`\`\` ",
        options: ["Line 1", "Line 2", "Both lines", "Neither"],
        answer: 1,
      },
      {
        question:
          'What will be the result?\`\`\` \n\ntry {\n  new FileReader("nofile.txt");\n} catch (IOException e) {\n  System.out.println("Caught");\n}\`\`\` ',
        options: [
          "File is read",
          "Nothing happens",
          "IOException is caught",
          "FileNotFoundException is missed",
        ],
        answer: 2,
      },
      {
        question:
          'Which exception must be declared or caught?\`\`\` \n\nObjectInputStream ois = new ObjectInputStream(new FileInputStream("file.ser"));\`\`\` ',
        options: [
          "RuntimeException",
          "IOException",
          "NullPointerException",
          "IllegalArgumentException",
        ],
        answer: 1,
      },

      // 11–20: True/False Questions
      {
        question:
          "The `finally` block is always executed even if an exception is not caught.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question:
          "Only classes that implement Serializable can be written using ObjectOutputStream.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "The `throw` keyword is used to declare exceptions.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "A RuntimeException must be declared in a method signature.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "FileNotFoundException is a checked exception.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "You can catch multiple exceptions in a single try block.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "Using try-catch is mandatory for all methods.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "A transient variable will be skipped during serialization.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "You can use Scanner to read binary files.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "IOException is a subclass of Exception.",
        options: ["True", "False"],
        answer: 0,
      },

      // 21–30: Conceptual Multiple-Choice Questions
      {
        question: "Which of the following is a superclass of all exceptions?",
        options: ["Exception", "Throwable", "RuntimeException", "Object"],
        answer: 1,
      },
      {
        question: "What is the purpose of the 'throws' keyword?",
        options: [
          "To catch exceptions",
          "To declare that a method may throw exceptions",
          "To write exception messages",
          "To suppress exceptions",
        ],
        answer: 1,
      },
      {
        question: "Which of the following is NOT a checked exception?",
        options: [
          "IOException",
          "FileNotFoundException",
          "NullPointerException",
          "ClassNotFoundException",
        ],
        answer: 2,
      },
      {
        question: "What does an ObjectInputStream do?",
        options: [
          "Reads text from the console",
          "Writes data to a text file",
          "Reads serialized objects from a stream",
          "Encrypts Java objects",
        ],
        answer: 2,
      },
      {
        question: "Which of the following can be used to append to a file?",
        options: [
          "Scanner",
          "PrintStream(new FileOutputStream(file, true))",
          "BufferedReader",
          "ObjectOutputStream",
        ],
        answer: 1,
      },
      {
        question:
          "Which exception is thrown when you cast an object to an incompatible class?",
        options: [
          "IOException",
          "ClassCastException",
          "NullPointerException",
          "ArithmeticException",
        ],
        answer: 1,
      },
      {
        question: "What does 'transient' mean for a class field?",
        options: [
          "The field will be saved in binary",
          "The field will be skipped during serialization",
          "The field is constant",
          "The field is public",
        ],
        answer: 1,
      },
      {
        question: "Which method is used to write an object to a file?",
        options: ["writeData()", "write()", "writeObject()", "writeLine()"],
        answer: 2,
      },
      {
        question: "Which file type is NOT readable using Scanner?",
        options: [".txt", ".csv", ".jpg", ".java"],
        answer: 2,
      },
      {
        question: "If an exception is not caught, what happens?",
        options: [
          "It is ignored",
          "It causes compile-time error",
          "It is passed up the call stack",
          "It stops the program silently",
        ],
        answer: 2,
      },
      {
        question: `What does the following code do?

\`\`\` File file = new File("notes.txt");
if (file.exists()) {
  System.out.println("File exists");
}\`\`\` `,
        options: [
          "Deletes the file",
          "Checks if 'notes.txt' exists",
          "Creates a new file",
          "Throws an exception if file not found",
        ],
        answer: 1,
      },
      {
        question: `What will this code output if 'data.txt' exists?
\`\`\` 
Scanner input = new Scanner(new File("data.txt"));
System.out.println(input.nextLine());\`\`\` `,
        options: [
          "The first line of data.txt",
          "An exception is thrown",
          "It skips all lines",
          "Nothing",
        ],
        answer: 0,
      },
      {
        question: `Which line enables appending to a file?

\`\`\` FileOutputStream fos = new FileOutputStream("log.txt", ___);\`\`\` `,
        options: ["false", "null", "true", "append"],
        answer: 2,
      },
      {
        question: `Which output stream is used to write objects?
\`\`\` 
_____ out = new _____("object.dat");
out.writeObject(new Student()); \`\`\` `,
        options: [
          "FileWriter",
          "PrintStream",
          "ObjectOutputStream",
          "BufferedWriter",
        ],
        answer: 2,
      },
      {
        question: `What is missing in this code?

\`\`\` ObjectInputStream in = new ObjectInputStream(new FileInputStream("obj.dat"));
Student s = (Student) in.readObject();\`\`\` `,
        options: [
          "ClassNotFoundException and IOException must be caught or declared",
          "It must implement Runnable",
          "Use PrintStream not ObjectInputStream",
          "Nothing is missing",
        ],
        answer: 0,
      },

      // True/False
      {
        question: "PrintStream is used to write human-readable text to a file.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question: "You must use FileReader to write data to a file.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question:
          "ObjectOutputStream can write any object, even if it doesn't implement Serializable.",
        options: ["True", "False"],
        answer: 1,
      },
      {
        question: "Binary files are not readable with Scanner.",
        options: ["True", "False"],
        answer: 0,
      },
      {
        question:
          "You can use BufferedReader to read text from a file line by line.",
        options: ["True", "False"],
        answer: 0,
      },
    ],
  },
  { name: "Chapter 8: Java Collection Classes", videos: [], questions: [  {
    question: "Which of the following collections maintains insertion order **and** does not allow duplicates?",
    options: [
      "HashSet",
      "LinkedHashSet",
      "TreeSet",
      "ArrayList"
    ],
    answer: 1
  },
  {
    question: "Which is true about the Java Collections Framework?",
    options: [
      "All collection types extend the Collection interface",
      "Map is a subtype of Collection",
      "Set is a subtype of Map",
      "Map is part of the Collections Framework but does not implement Collection"
    ],
    answer: 3
  },
  {
    question: "Which of the following statements is TRUE about generics in Java collections?",
    options: [
      "They prevent all runtime type errors",
      "They allow you to store primitive types directly",
      "They ensure compile-time type safety",
      "They make classes abstract"
    ],
    answer: 2
  },
  {
    question: "Which implementation would be best suited for a collection that requires fast insertion and deletion from both ends?",
    options: [
      "ArrayList",
      "HashSet",
      "LinkedList",
      "TreeSet"
    ],
    answer: 2
  },
  {
    question: "What would be the output of this code?\n\n```\nSet<String> set = new TreeSet<>();\nset.add(\"banana\");\nset.add(\"apple\");\nset.add(\"apple\");\nSystem.out.println(set);\n```",
    options: [
      "[banana, apple, apple]",
      "[banana, apple]",
      "[apple, banana]",
      "[apple, apple, banana]"
    ],
    answer: 2
  },
  {
    question: "What kind of ordering does TreeMap guarantee?",
    options: [
      "Insertion order",
      "No specific order",
      "Key-based natural ordering or custom comparator",
      "Value-based sorting"
    ],
    answer: 2
  },
  {
    question: "Which method is NOT part of the Map interface?",
    options: [
      "put()",
      "containsKey()",
      "add()",
      "entrySet()"
    ],
    answer: 2
  },
  {
    question: "Which of the following interfaces is NOT extended by the Collection interface?",
    options: [
      "Set",
      "List",
      "Map",
      "Queue"
    ],
    answer: 2
  },
  {
    question: "You want a sorted collection that automatically removes duplicates. What should you use?",
    options: [
      "ArrayList",
      "TreeSet",
      "HashMap",
      "Vector"
    ],
    answer: 1
  },
  {
    question: `What is the output?

\`\`\`
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
list.add(1, "C");
System.out.println(list);
\`\`\``,
    options: [
      "[A, B, C]",
      "[A, C, B]",
      "[C, A, B]",
      "[B, A, C]"
    ],
    answer: 1
  },
  {
    question: "Which data structure would you use if you need to store key-value pairs and quickly retrieve values by key, but you don't care about order?",
    options: [
      "TreeMap",
      "HashMap",
      "LinkedHashMap",
      "HashSet"
    ],
    answer: 1
  },
  {
    question: "Which method in the Collection interface removes all elements?",
    options: [
      "deleteAll()",
      "remove()",
      "clear()",
      "reset()"
    ],
    answer: 2
  },
  {
    question: "Why would using raw types (e.g. List list = new ArrayList();) be dangerous?",
    options: [
      "They disable polymorphism",
      "They allow adding any object type, increasing runtime errors",
      "They cannot be cast to specific types",
      "They are not compatible with for-each loops"
    ],
    answer: 1
  },
  {
    question: "If you wanted a map that keeps keys sorted automatically, which would you choose?",
    options: [
      "HashMap",
      "TreeMap",
      "LinkedHashMap",
      "EnumMap"
    ],
    answer: 1
  },
  {
    question: "Which of the following allows duplicate keys?",
    options: [
      "HashMap",
      "TreeMap",
      "LinkedHashMap",
      "None of the above"
    ],
    answer: 3
  },
{
    question: "Which of the following will throw a `NullPointerException`?",
    options: [
      "new ArrayList<String>().add(null);",
      "new TreeSet<String>().add(null);",
      "new LinkedList<String>().add(null);",
      "new HashSet<String>().add(null);"
    ],
    answer: 1
  },
  {
    question: "Which of these will maintain the order in which elements were added AND allow duplicates?",
    options: [
      "HashSet",
      "TreeSet",
      "ArrayList",
      "LinkedHashSet"
    ],
    answer: 2
  },
  {
    question: "Which of the following is true about `HashMap`?",
    options: [
      "It maintains insertion order",
      "It does not allow null keys or values",
      "Keys are hashed to determine their storage location",
      "Values are stored in a tree structure"
    ],
    answer: 2
  },
  {
    question: "What is the output of this code?\n\n```\nMap<String, String> map = new HashMap<>();\nmap.put(null, \"value1\");\nmap.put(null, \"value2\");\nSystem.out.println(map.get(null));\n```",
    options: [
      "value1",
      "value2",
      "null",
      "Compilation error"
    ],
    answer: 1
  },
  {
    question: "Which data structure is best if you need to ensure elements are **unique**, but also need **fast lookup**?",
    options: [
      "ArrayList",
      "TreeSet",
      "LinkedList",
      "HashSet"
    ],
    answer: 3
  },
  {
    question: "Which method is used to retrieve all values from a `Map`?",
    options: [
      "getKeys()",
      "getValues()",
      "entrySet()",
      "values()"
    ],
    answer: 3
  },
  {
    question: "What happens if you add the same key twice to a `HashMap`?",
    options: [
      "It throws an exception",
      "The map allows it and stores both",
      "The value is updated",
      "The second insert is ignored"
    ],
    answer: 2
  },
  {
    question: "What’s the difference between `HashMap` and `Hashtable`?",
    options: [
      "Hashtable allows null keys",
      "HashMap is thread-safe",
      "Hashtable is synchronized by default",
      "HashMap is faster and synchronized"
    ],
    answer: 2
  },
  {
    question: "Which of these interfaces allows elements to be accessed using a key?",
    options: [
      "Set",
      "List",
      "Map",
      "Queue"
    ],
    answer: 2
  },
{
  question: "What’s the output? ``` Set set = new LinkedHashSet<>(); set.add(\"C\"); set.add(\"B\"); set.add(\"A\"); System.out.println(set); ```",
  options: [
    "[A, B, C]",
    "[C, B, A]",
    "[B, A, C]",
    "[A, C, B]"
  ],
  answer: 1
},
  {
    question: "Which of the following allows fast lookup and keeps insertion order?",
    options: [
      "HashMap",
      "TreeMap",
      "LinkedHashMap",
      "EnumMap"
    ],
    answer: 2
  },
  {
    question: "Which of the following methods is used to get both the key and value in a Map together?",
    options: [
      "values()",
      "keySet()",
      "entrySet()",
      "allPairs()"
    ],
    answer: 2
  },
  {
    question: "Which of these is true about `TreeSet`?",
    options: [
      "It allows null elements",
      "It sorts the elements based on their hash code",
      "It stores elements in natural or custom sorted order",
      "It allows duplicate values"
    ],
    answer: 2
  },

] },
];

export default chapters;