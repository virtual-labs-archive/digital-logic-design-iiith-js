# Documentation For SRIP Project(DLD-Adder Circuit)
 
### Introduction

An adder is a digital circuit that performs addition of numbers. In many computers and other kinds of processors adders are used in the arithmetic logic units or ALU. They are also used in other parts of the processor, where they are used to calculate addresses, table indices, increment and decrement operators, and similar operations.

This project is a simulation of the Adder circuit made in Digital Logic Design(DLD). using this simulator we can implement any adder circuit like half adder full adder parallel 4bit adder etc..
---

### Adders

An adder is a digital logic circuit in electronics that implements addition of numbers. In many computers and other types of processors, adders are used to calculate addresses, similar operations and table indices in the ALU and also in other parts of the processors. These can be built for many numerical representations like excess-3 or binary coded decimal. Adders are classified into two types: half adder and full adder. The half adder circuit has two inputs: A and B, which add two input digits and generate a carry and sum. The full adder circuit has three inputs: A and C, which add the three input numbers and generate a carry and sum. This article gives brief information about half adder and full adder in tabular forms and circuit diagrams.
mainly we have basic two adder circuits.

    1.Half-Adder
    2.Full-Adder
    
### Half Adder–
1.An adder is a digital circuit that performs addition of numbers. The half adder adds two binary digits called as augend and addend and produces two outputs as sum and carry; XOR is applied to both inputs to produce sum and AND gate is applied to both inputs to produce carry. The full adder adds 3 one bit numbers, where two can be referred to as operands and one can be referred to as bit carried in. And produces 2-bit output, and these can be referred to as output carry and sum.

2. By using half adder, you can design simple addition with the help of logic gates.
3. Truth table for half adder

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_project_2/Codes/images/Half-Addder-Truth-Table.jpg)

4.Now it has been cleared that  1-bit adder can be easily implemented with the help of the XOR Gate for the output ‘SUM’ and an AND Gate for the ‘Carry’. When we need to add, two 8-bit bytes together, we can be done with the help of a full-adder logic. The half-adder is useful when you want to  add one binary digit quantities. A way to develop a two-binary digit adders would be to make a truth table and reduce it.  When you want to make a three binary digit adder, do it again. When you decide to make a four digit adder, do it again. The circuits would be fast, but development time is slow.
5. circuit diagram forhalf adder

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_project_2/Codes/images/Half-Adder-Circuit.jpg)

6.The simplest expression uses the exclusive OR function: Sum=AÅB. An equivalent expression in terms of the basic AND, OR, and NOT is: SUM=A|.B+A.B’
### Full Adder –:

This adder is difficult to implement than a half-adder. The difference between a half-adder and a full-adder is that the full-adder has three inputs and two outputs, whereas half adder has only two inputs and two outputs. The first two inputs are A and B and the third input is an input carry as C-IN. When a full-adder logic is designed, you string eight of them together to create a byte-wide adder and cascade the carry bit from one adder to the nex.

The output carry is designated as C-OUT and the normal output is designated as S.

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_project_2/Codes/images/Full-Adder-Truth-Table.jpg)

With the truth-table, the full adder logic can be implemented. You can see that the output S is an XOR between the input A and the half-adder, SUM output with B and C-IN inputs. We take C-OUT will only be true if any of the two inputs out of the three are HIGH.
So, we can implement a full adder circuit with the help of two half adder circuits. At first, half adder will be used to add A and B to produce a partial Sum and a second half adder logic can be used to add C-IN to the Sum produced by the first half adder to get the final S output.

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_project_2/Codes/images/Full-Adder-Circuit.jpg)

If any of the half adder logic produces a carry, there will be an output carry. So, COUT will be an OR function of the half-adder Carry outputs. Take a look at the implementation of the full adder circuit shown below.
The implementation of larger logic diagrams is possible with the above full adder logic a simpler symbol is mostly used to represent the operation. Given below is a simpler schematic representation of a one-bit full adder.

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_project_2/Codes/images/Full-Adder-by-Half-Adders.jpg)

### Parallel Adder:

A single full adder performs the addition of two one bit numbers and an input carry. But a Parallel Adder is a digital circuit capable of finding the arithmetic sum of two binary numbers that is greater than one bit in length by operating on corresponding pairs of bits in parallel. It consists of full adders connected in a chain where the output carry from each full adder is connected to the carry input of the next higher order full adder in the chain. A n bit parallel adder requires n full adders to perform the operation. So for the two-bit number, two adders are needed while for four bit number, four adders are needed and so on. Parallel adders normally incorporate carry lookahead logic to ensure that carry propagation between subsequent stages of addition does not limit addition speed. 

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_project_2/Codes/images/paraller_adder.png)

## Objective:

1. The objective of this experiment is to understand working of the Adder Circuit.
2. Try to make basic adder circuit.

## Procedure:

1. With The help of Theory Page , try to build the adder Circuit.
2. First of all build the basic half adder .
3. Then make the full adder
4. If You are unable to make it , load the circuit directly and use it

# Technical Details:

## Languages Used:
1. HTML
2. CSS
3. Javascript

## Libraries Used:
1. [Bootstrap](https://getbootstrap.com/) 
2. [jQuery](https://jquery.com/)

## Module Used
1. [Simcir](https://kazuhikoarase.github.io/simcirjs/)
[github link](https://github.com/kazuhikoarase/simcirjs)

## Implementation:

### The simcir module

The simcir module basically searches for a div with class named "simcir". It reads the json data inside that div, and transforms it into a live simulation. 

The json data contains the following things:
1. width(integer)- width of the simulator on the screen in px
2. height(integer)- height of the simulator in px
3. showToolbox(boolean)- decides if the toolbox(the left panel) is to be displayed or not.
4. toolbox(array)- items/tools to be shown in toolbox
5. devices(array)- devices to be displayed on the breadboard
6. connectors(array)- connections between the simulated tools/items.

### Overview

More circuits/tools have been added to the simulation, and premade circuit data is created to load the counters with the click of a button.

### Files

#### Circuitworking.js

##### Overview:
This file manages all the local variables and remembers the settings to be applied on refreshes of the page.

##### Technicalities:
1. Made the width of the simulator dynamic by using the screen size of the pc which is running the simulation to utilize maximum width possible without scrolling
2. This file uses 'sessionStorage' variables(which uses key value pairs to store data), which remain as long as the tab is open, and do not clear on page refreshes. These variables are used to store the settings of the user.
3. Since the simcir library uses the json data provided at the start, and then replaces it by the simulation, we need to refresh the page and set new json data in the 'simcir' div.
4. Different settings are stored in different key-value pairs in sessionStorage.
	* 'Half Adder' - Is true if the button "Load Half adder" is clicked
	* 'Full Adder' - Is true if the button "Load Full adder" is clicked
	* 'Parallel Adder' - Is true if the button "Load Parallel adder" is clicked
5. The program first checks if there should be any circuit preloaded. If yes, then it checks all the settings and sets them up accordingly. If no, then it loads a blank simulation with the settings applied.
6. The file also handles all the click events on the webpage to make the buttons interactable

## Test Cases

### Test Case 1

#### Dynamic simulator size

* Simulator loads according to different screen size

* Simulator does not resize itself when the window is resized when the simulator is already loaded, a refresh is required.

Test case partially passed.

### Test Case 2

#### Checkboxes

Input: click
Output: toggle

Test case passed.

### Test Case 3

#### Load

Input: click
Output: page refresh with Adder loaded with no interaction(with settings intact).

Test case passed.

### Test Case 4

#### Load Half Adder

Input: click
Output: page refresh with Half Adder loaded with no interaction(with settings intact).

Test case passed.
### Test Case 5

#### Load Full Adder 

Input: click
Output: page refresh with Full Adder loaded with no interaction(with settings intact).

Test case passed.
### Test Case 6

#### Load Parallel 4bit Adder 

Input: click
Output: page refresh with Parallel 4bit Adder loaded with no interaction(with settings intact).

Test case passed.
### Test Case 7

#### Clear Workspace

Input: click
Output: page refresh with blank breadboard and interaction enabled(with settings intact). 

Test case passed.

### Test Case 8

#### Simulation

Input: drag/drop/connections
Output: everything working correctly. 

Test case passed.

