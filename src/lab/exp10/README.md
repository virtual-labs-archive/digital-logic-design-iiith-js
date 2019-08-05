# Documentation For SRIP Project(DLD-State Diagrams)
 
### Introduction
We have examined a general model for sequential circuits. In this model the effect of all previous inputs on the outputs is represented by a state of the circuit. Thus, the output of the circuit at any time depends upon its current state and the input. These also determine the next state of the circuit. The relationship that exists among the inputs, outputs, present states and next states can be specified by either the state table or the state diagram.

### State Table

The state table representation of a sequential circuit consists of three sections labeled present state, next state and output. The present state designates the state of flip-flops before the occurrence of a clock pulse. The next state shows the states of flip-flops after the clock pulse, and the output section lists the value of the output variables during the present state.

### State Diagram

In addition to graphical symbols, tables or equations, flip-flops can also be represented graphically by a state diagram. In this diagram, a state is represented by a circle, and the transition between states is indicated by directed lines (or arcs) connecting the circles.

This project is a simulation of the State Diagram made in Digital Logic Design(DLD).
---

### State Machines

Up to now, every circuit that was presented was a combinatorial circuit. That means that its output is dependent only by its current inputs. Previous inputs for that type of circuits have no effect on the output.
However, there are many applications where there is a need for our circuits to have “memory”; to remember previous inputs and calculate their outputs according to them. A circuit whose output depends not only on the present input but also on the history of the input is called a sequential circuit.
In this section we will learn how to design and build such sequential circuits. In order to see how this procedure works, we will use an example, on which we will study our topic.
So let’s suppose we have a digital quiz game that works on a clock and reads an input from a manual button. However, we want the switch to transmit only one HIGH pulse to the circuit. If we hook the button directly on the game circuit it will transmit HIGH for as few clock cycles as our finger can achieve. On a common clock frequency our finger can never be fast enough.

### Step1:
The first step of the design procedure is to define with simple but clear words what we want our circuit to do:
“Our mission is to design a secondary circuit that will transmit a HIGH pulse with duration of only one cycle when the manual button is pressed, and won’t transmit another pulse until the button is depressed and pressed again.”

### Step2:

The next step is to design a State Diagram. This is a diagram that is made from circles and arrows and describes visually the operation of our circuit. In mathematic terms, this diagram that describes the operation of our sequential circuit is a Finite State Machine.
Make a note that this is a Moore Finite State Machine. Its output is a function of only its current state, not its input. That is in contrast with the Mealy Finite State Machine, where input affects the output. In this tutorial, only the Moore Finite State Machine will be examined. 
The State Diagram of our circuit is the following: (Figure below)
   ![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/basic1.webp)
   
   Every circle represents a “state”, a well-defined condition that our machine can be found at.
In the upper half of the circle we describe that condition. The description helps us remember what our circuit is supposed to do at that condition.
1.The first circle is the “stand-by” condition. This is where our circuit starts from and where it waits for another button press.
2.The second circle is the condition where the button has just been just pressed and our circuit needs to transmit a HIGH pulse.
3.The third circle is the condition where our circuit waits for the button to be released before it returns to the “stand-by” condition.
4.Every arrow represents a “transition” from one state to another. A transition happens once every clock cycle. Depending on the current Input, we may go to a different state each time. Notice the number in the middle of every arrow. This is the current Input.
### Step3: 
1.Next, we replace the words that describe the different states of the diagram with binary numbers. We start the enumeration from 0 which is assigned on the initial state. We then continue the enumeration with any state we like, until all states have their number. The result looks something like this: (Figure below)

 ![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/bacis_state.webp) 

### Step4:

Afterwards, we fill the State Table. This table has a very specific form. I will give the table of our example and use it to explain how to fill it in. (Figure below) 

 ![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/state_truth_table.webp)
 1.First we will examine how we implement our “Machine” with D-Flip Flops.
 ![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/state_truth_withD.webp)


### Step5:

We are in the final stage of our procedure. What remains, is to determine the Boolean functions that produce the inputs of our Flip Flops and the Output. We will extract one Boolean funtion for each Flip Flop input we have. This can be done with a Karnaugh Map. The input variables of this map are the Current State variables as well as the Inputs.

That said, the input functions for our D - Flip Flops are the following:

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/Dff%20Kmaps.webp)

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/eqns.webp)
### Step6:

A Karnaugh Map will be used to determine the function of the Output as well: (Figure below)


![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/Youtput.webp)

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/yqn.webp)

### Step7:

 We design our circuit. We place the Flip Flops and use logic gates to form the Boolean functions that we calculated. The gates take input from the output of the Flip Flops and the Input of the circuit. Don’t forget to connect the clock to the Flip Flops!

The D - Flip Flop version: (Figure below)
![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP_Project_1/Codes/images/Final%20Circuit.webp)

This is it! We have successfully designed and constructed a Sequential Circuit.
## Objective:

1. The objective of this experiment is to understand working of the State Diagram.
2. Try to make basic 2bit and 3bit state diagrams.

## Procedure:

1. With The help of Theory Page , try to build the state diagram circuit.
2. First of all build the basic state diagrms .
3. Then make the 2bit state diagram
4. If You are unable to make it , load the circuit directly and use it
5. Use OSC frequence input to analyze the output

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
	* 'OSCfreq' - The frequency of OSC to analyze output
	* '2bit state diagram' - Is true if the button "Load 2bit state diagram" is clicked
	* '3bit state diagram' - Is true if the button "Load 3bit state diagram"is clicked
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
Output: page refresh with couter loaded with no interaction(with settings intact).

Test case passed.

### Test Case 4

#### Load 2bit state diagram

Input: click
Output: page refresh with 2bit state diagram loaded with no interaction(with settings intact).

Test case passed.
### Test Case 5

#### Load 3bit state diagram

Input: click
Output: page refresh with 2bit state diagram loaded with no interaction(with settings intact).

Test case passed.
### Test Case 6

#### Clear Workspace

Input: click
Output: page refresh with blank breadboard and interaction enabled(with settings intact). 

Test case passed.

### Test Case 7

#### Simulation

Input: drag/drop/connections
Output: everything working correctly. 

Test case passed.

