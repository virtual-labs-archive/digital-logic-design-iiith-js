# Documentation For SRIP Project(DLD-Registers)
 
### Introduction

Registers,A register is a memory device that can be used to store more than one bit of information. □ A register is usually realized as several flip-flops with common control signals that control the movement of data to and from the register.

This project is a simulation of the Registers made in Digital Logic Design(DLD). It has only 2 counters currently, the SISO, and the SIPO.
---

### Registers

Flip flops can be used to store a single bit of binary data (1or 0). However, in order to store multiple bits of data, we need multiple flip flops. N flip flops are to be connected in an order to store n bits of data. A Register is a device which is used to store such information. It is a group of flip flops connected in series used to store multiple bits of data.

The information stored within these registers can be transferred with the help of shift registers. Shift Register is a group of flip flops used to store multiple bits of data. The bits stored in such registers can be made to move within the registers and in/out of the registers by applying clock pulses. An n-bit shift register can be formed by connecting n flip-flops where each flip flop stores a single bit of data.
The registers which will shift the bits to left are called “Shift left registers”.
The registers which will shift the bits to right are called “Shift right registers”.
Shift registers are basically of 4 types. These are:

    1.Serial In Serial Out shift register
    2.Serial In parallel Out shift register
    3.Parallel In Serial Out shift register
    4.Parallel In parallel Out shift register
    
### Serial-In Serial-Out Shift Register (SISO) –
1. The shift register, which allows serial input (one bit after the other through a single data line) and produces a serial output is known as Serial-In Serial-Out shift register. Since there is only one output, the data leaves the shift register one bit at a time in a serial pattern, thus the name Serial-In Serial-Out Shift Register.

2. The logic circuit given below shows a serial-in serial-out shift register. The circuit consists of four D flip-flops which are connected in a serial manner. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop. 

3. The below circuit is an example of shift right register, taking the serial data input from the left side of the flip flop. The main use of a SISO is to act as a delay element.
![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP/Codes/images/SISO_DOC.png)

### Serial-In Parallel-Out shift Register (SIPO) –:

The shift register, which allows serial input (one bit after the other through a single data line) and produces a parallel output is known as Serial-In Parallel-Out shift register.

The logic circuit given below shows a serial-in-parallel-out shift register. The circuit consists of four D flip-flops which are connected. The clear (CLR) signal is connected in addition to the clock signal to all the 4 flip flops in order to RESET them. The output of the first flip flop is connected to the input of the next flip flop and so on. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop.
The below circuit is an example of shift right register, taking the serial data input from the left side of the flip flop and producing a parallel output. They are used in communication lines where demultiplexing of a data line into several parallel lines is required because the main use of the SIPO register is to convert serial data into parallel data.
![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP/Codes/images/SIPO_DOC.png)

### Parallel-In Serial-Out Shift Register (PISO):

The shift register, which allows parallel input (data is given separately to each flip flop and in a simultaneous manner) and produces a serial output is known as Parallel-In Serial-Out shift register.

The logic circuit given below shows a parallel-in-serial-out shift register. The circuit consists of four D flip-flops which are connected. The clock input is directly connected to all the flip flops but the input data is connected individually to each flip flop through a multiplexer at the input of every flip flop. The output of the previous flip flop and parallel data input are connected to the input of the MUX and the output of MUX is connected to the next flip flop. All these flip-flops are synchronous with each other since the same clock signal is applied to each flip flop.
A Parallel in Serial out (PISO) shift register us used to convert parallel data to serial data. 

![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP/Codes/images/PISO_DOC.jpg)
### Parallel-In Parallel-Out Shift Register (PIPO):

The shift register, which allows parallel input (data is given separately to each flip flop and in a simultaneous manner) and also produces a parallel output is known as Parallel-In parallel-Out shift register.

The logic circuit given below shows a parallel-in-parallel-out shift register. The circuit consists of four D flip-flops which are connected. The clear (CLR) signal and clock signals are connected to all the 4 flip flops. In this type of register, there are no interconnections between the individual flip-flops since no serial shifting of the data is required. Data is given as input separately for each flip flop and in the same way, output also collected individually from each flip flop.
![Image](https://github.com/saikumar970/digital-logic-design-iiith/blob/master/SRIP/Codes/images/PIPO_DOC.png)


## Objective:

1. The objective of this experiment is to understand working of the Register.
2. Try to make basic SIPO SISO PISO and PIPO.

## Procedure:

1. With The help of Theory Page , try to build the Register Circuit.
2. First of all build the basic Register .
3. Then make the  SISO
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

More circuits/tools have been added to the simulation, and premade circuit data is created to load the register with the click of a button.

### Files

#### Circuitworking.js

##### Overview:
This file manages all the local variables and remembers the settings to be applied on refreshes of the page.

##### Technicalities:
1. Made the width of the simulator dynamic by using the screen size of the pc which is running the simulation to utilize maximum width possible without scrolling
2. This file uses 'sessionStorage' variables(which uses key value pairs to store data), which remain as long as the tab is open, and do not clear on page refreshes. These variables are used to store the settings of the user.
3. Since the simcir library uses the json data provided at the start, and then replaces it by the simulation, we need to refresh the page and set new json data in the 'simcir' div.
4. Different settings are stored in different key-value pairs in sessionStorage.
	* 'SISO' - Is true if the button "Load SISO Register" is clicked
	* 'SIPO' - Is true if the button "Load SIPO Register" is clicked
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
Output: page refresh loaded with no interaction(with settings intact).

Test case passed.

### Test Case 4

#### Load SISO Register

Input: click
Output: page refresh with SISO register loaded with no interaction(with settings intact).

Test case passed.
### Test Case 5

#### Load SIPO Register

Input: click
Output: page refresh with SIPO register loaded with no interaction(with settings intact).

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

