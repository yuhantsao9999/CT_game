/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Math blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.math'); // Deprecated
goog.provide('Blockly.Constants.Math');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['MATH_HUE']. (2018 April 5)
 */
Blockly.Constants.Math.HUE = 230;

Blockly.defineBlocksWithJsonArray([// BEGIN JSON EXTRACT
        // Block for numeric value.
        {
            "type": "math_number",
            "message0": "%1",
            "args0": [{
                    "type": "field_number",
                    "name": "NUM",
                    "value": 0
                }
            ],
            "output": "Number",
            "helpUrl": "%{BKY_MATH_NUMBER_HELPURL}",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_NUMBER_TOOLTIP}",
            "extensions": ["parent_tooltip_when_inline"]
        },

        // Block for basic arithmetic operator.
        {
            "type": "math_arithmetic",
            "message0": "%1 %2 %3",
            "args0": [{
                    "type": "input_value",
                    "name": "A",
                    "check": "Number"
                }, {
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
                        ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
                        ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
                        ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
                        ["%{BKY_MATH_POWER_SYMBOL}", "POWER"]
                    ]
                }, {
                    "type": "input_value",
                    "name": "B",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "helpUrl": "%{BKY_MATH_ARITHMETIC_HELPURL}",
            "extensions": ["math_op_tooltip"]
        },

        // Block for advanced math operators with single operand.
        {
            "type": "math_single",
            "message0": "%1 %2",
            "args0": [{
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["%{BKY_MATH_SINGLE_OP_ROOT}", 'ROOT'],
                        ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", 'ABS'],
                        ['-', 'NEG'],
                        ['ln', 'LN'],
                        ['log10', 'LOG10'],
                        ['e^', 'EXP'],
                        ['10^', 'POW10']
                    ]
                }, {
                    "type": "input_value",
                    "name": "NUM",
                    "check": "Number"
                }
            ],
            "output": "Number",
            "style": "math_blocks",
            "helpUrl": "%{BKY_MATH_SINGLE_HELPURL}",
            "extensions": ["math_op_tooltip"]
        },

        // Block for trigonometry operators.
        {
            "type": "math_trig",
            "message0": "%1 %2",
            "args0": [{
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["%{BKY_MATH_TRIG_SIN}", "SIN"],
                        ["%{BKY_MATH_TRIG_COS}", "COS"],
                        ["%{BKY_MATH_TRIG_TAN}", "TAN"],
                        ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
                        ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
                        ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
                    ]
                }, {
                    "type": "input_value",
                    "name": "NUM",
                    "check": "Number"
                }
            ],
            "output": "Number",
            "style": "math_blocks",
            "helpUrl": "%{BKY_MATH_TRIG_HELPURL}",
            "extensions": ["math_op_tooltip"]
        },

        // Block for constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
        {
            "type": "math_constant",
            "message0": "%1",
            "args0": [{
                    "type": "field_dropdown",
                    "name": "CONSTANT",
                    "options": [
                        ["\u03c0", "PI"],
                        ["e", "E"],
                        ["\u03c6", "GOLDEN_RATIO"],
                        ["sqrt(2)", "SQRT2"],
                        ["sqrt(\u00bd)", "SQRT1_2"],
                        ["\u221e", "INFINITY"]
                    ]
                }
            ],
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_CONSTANT_TOOLTIP}",
            "helpUrl": "%{BKY_MATH_CONSTANT_HELPURL}"
        },

        // Block for checking if a number is even, odd, prime, whole, positive,
        // negative or if it is divisible by certain number.
        {
            "type": "math_number_property",
            "message0": "%1 %2",
            "args0": [{
                    "type": "input_value",
                    "name": "NUMBER_TO_CHECK",
                    "check": "Number"
                }, {
                    "type": "field_dropdown",
                    "name": "PROPERTY",
                    "options": [
                        ["%{BKY_MATH_IS_EVEN}", "EVEN"],
                        ["%{BKY_MATH_IS_ODD}", "ODD"],
                        ["%{BKY_MATH_IS_PRIME}", "PRIME"],
                        ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
                        ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
                        ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
                        ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"]
                    ]
                }
            ],
            "inputsInline": true,
            "output": "Boolean",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_IS_TOOLTIP}",
            "mutator": "math_is_divisibleby_mutator"
        },

        // Block for adding to a variable in place.
        {
            "type": "math_change",
            "message0": "%{BKY_MATH_CHANGE_TITLE}",
            "args0": [{
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": "%{BKY_MATH_CHANGE_TITLE_ITEM}"
                }, {
                    "type": "input_value",
                    "name": "DELTA",
                    "check": "Number"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "style": "variable_blocks",
            "helpUrl": "%{BKY_MATH_CHANGE_HELPURL}",
            "extensions": ["math_change_tooltip"]
        },

        // Block for rounding functions.
        {
            "type": "math_round",
            "message0": "%1 %2",
            "args0": [{
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
                        ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
                        ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"]
                    ]
                }, {
                    "type": "input_value",
                    "name": "NUM",
                    "check": "Number"
                }
            ],
            "output": "Number",
            "style": "math_blocks",
            "helpUrl": "%{BKY_MATH_ROUND_HELPURL}",
            "tooltip": "%{BKY_MATH_ROUND_TOOLTIP}"
        },

        // Block for evaluating a list of numbers to return sum, average, min, max,
        // etc.  Some functions also work on text (min, max, mode, median).
        {
            "type": "math_on_list",
            "message0": "%1 %2",
            "args0": [{
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
                        ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"]
                    ]
                }, {
                    "type": "input_value",
                    "name": "LIST",
                    "check": "Array"
                }
            ],
            "output": "Number",
            "style": "math_blocks",
            "helpUrl": "%{BKY_MATH_ONLIST_HELPURL}",
            "mutator": "math_modes_of_list_mutator",
            "extensions": ["math_op_tooltip"]
        },

        // Block for remainder of a division.
        {
            "type": "math_modulo",
            "message0": "%{BKY_MATH_MODULO_TITLE}",
            "args0": [{
                    "type": "input_value",
                    "name": "DIVIDEND",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "DIVISOR",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_MODULO_TOOLTIP}",
            "helpUrl": "%{BKY_MATH_MODULO_HELPURL}"
        },

        // Block for constraining a number between two limits.
        {
            "type": "math_constrain",
            "message0": "%{BKY_MATH_CONSTRAIN_TITLE}",
            "args0": [{
                    "type": "input_value",
                    "name": "VALUE",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "LOW",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "HIGH",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
            "helpUrl": "%{BKY_MATH_CONSTRAIN_HELPURL}"
        },

        // Block for random integer between [X] and [Y].
        {
            "type": "math_random_int",
            "message0": "%{BKY_MATH_RANDOM_INT_TITLE}",
            "args0": [{
                    "type": "input_value",
                    "name": "FROM",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "TO",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
            "helpUrl": "%{BKY_MATH_RANDOM_INT_HELPURL}"
        },

        // Block for random integer between [X] and [Y].
        {
            "type": "math_random_float",
            "message0": "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
            "helpUrl": "%{BKY_MATH_RANDOM_FLOAT_HELPURL}"
        },

        // Block for calculating atan2 of [X] and [Y].
        {
            "type": "math_atan2",
            "message0": "%{BKY_MATH_ATAN2_TITLE}",
            "args0": [{
                    "type": "input_value",
                    "name": "X",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "Y",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "%{BKY_MATH_ATAN2_TOOLTIP}",
            "helpUrl": "%{BKY_MATH_ATAN2_HELPURL}"
        },

        // math_compare block here
        {
            "type": "math_compare",
            "message0": "%1 %2 %3",
            "args0": [{
                    "type": "input_value",
                    "name": "A",
                    "check": "Number"
                }, {
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["=", "EQ"],
                        ["\u2260", "NEQ"],
                        ["\u200F<", "LT"],
                        ["\u200F\u2264", "LTE"],
                        ["\u200F>", "GT"],
                        ["\u200F\u2265", "GTE"]
                    ]
                }, {
                    "type": "input_value",
                    "name": "B",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Boolean",
            "style": "math_blocks",
            "tooltip": "",
            "helpUrl": ""
        },

        // math_subtract block here
        {
            "type": "math_subtract",
            "message0": "%1 - %2",
            "args0": [{
                    "type": "input_value",
                    "name": "A",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "B",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "",
            "helpUrl": ""
        },

        //math_division block here
        {
            "type": "math_division",
            "message0": "%1 / %2",
            "args0": [{
                    "type": "input_value",
                    "name": "A",
                    "check": "Number"
                }, {
                    "type": "input_value",
                    "name": "B",
                    "check": "Number"
                }
            ],
            "inputsInline": true,
            "output": "Number",
            "style": "math_blocks",
            "tooltip": "",
            "helpUrl": ""
        }
        //
    ]); // END JSON EXTRACT (Do not delete this comment.)

// math_add block here
Blockly.Blocks['math_add'] = {
    init: function () {
        this.setHelpUrl("");
        this.setStyle('math_blocks');
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "Number");
        this.setInputsInline(true);
        this.setMutator(new Blockly.Mutator(['math_mutator_item']));
        this.setTooltip("");
    },
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('math_add_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('math_mutator_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('NUM' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'NUM' + i);
        }
    },
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('NUM' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('NUM' + i)) {
                var input = this.appendValueInput('NUM' + i).setCheck("Number");
                if (i != 0) {
                    input.appendField("+");
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('NUM' + i)) {
            this.removeInput('NUM' + i);
            i++;
        }
    }
};

Blockly.Blocks['math_add_container'] = {
    /**
     * Mutator block for add container.
     * @this {Blockly.Block}
     */
    init: function () {
        this.setStyle('math_blocks');
        this.appendDummyInput()
        .appendField("+");
        this.appendStatementInput('STACK');
        this.setTooltip("");
        this.contextMenu = false;
    }
};

Blockly.Blocks['math_mutator_item'] = {
    // Add items.
    init: function () {
        this.setStyle('math_blocks');
        this.appendDummyInput()
        .appendField("number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("");
        this.contextMenu = false;
    }
};

// math_multiply block here
Blockly.Blocks['math_multiply'] = {
    // Basic arithmetic operator.
    init: function () {
        this.setHelpUrl("");
        this.setStyle('math_blocks');
        this.itemCount_ = 2;
        this.updateShape_();
        this.setOutput(true, "Number");
        this.setInputsInline(true);
        this.setMutator(new Blockly.Mutator(['math_mutator_item']));
        this.setTooltip("");
    },
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('math_multiply_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('math_mutator_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('NUM' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'NUM' + i);
        }
    },
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('NUM' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    updateShape_: function () {
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('NUM' + i)) {
                var input = this.appendValueInput('NUM' + i).setCheck("Number");
                if (i != 0) {
                    input.appendField("×");
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('NUM' + i)) {
            this.removeInput('NUM' + i);
            i++;
        }
    }
};

Blockly.Blocks['math_multiply_container'] = {
    /**
     * Mutator block for add container.
     * @this {Blockly.Block}
     */
    init: function () {
        this.setStyle('math_blocks');
        this.appendDummyInput()
        .appendField("×");
        this.appendStatementInput('STACK');
        this.setTooltip("");
        this.contextMenu = false;
    }
};

/**
 * Mapping of math block OP value to tooltip message for blocks
 * math_arithmetic, math_simple, math_trig, and math_on_lists.
 * @see {Blockly.Extensions#buildTooltipForDropdown}
 * @package
 * @readonly
 */
Blockly.Constants.Math.TOOLTIPS_BY_OP = {
    // math_arithmetic
    'ADD': '%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}',
    'MINUS': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}',
    'MULTIPLY': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}',
    'DIVIDE': '%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}',
    'POWER': '%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}',

    // math_simple
    'ROOT': '%{BKY_MATH_SINGLE_TOOLTIP_ROOT}',
    'ABS': '%{BKY_MATH_SINGLE_TOOLTIP_ABS}',
    'NEG': '%{BKY_MATH_SINGLE_TOOLTIP_NEG}',
    'LN': '%{BKY_MATH_SINGLE_TOOLTIP_LN}',
    'LOG10': '%{BKY_MATH_SINGLE_TOOLTIP_LOG10}',
    'EXP': '%{BKY_MATH_SINGLE_TOOLTIP_EXP}',
    'POW10': '%{BKY_MATH_SINGLE_TOOLTIP_POW10}',

    // math_trig
    'SIN': '%{BKY_MATH_TRIG_TOOLTIP_SIN}',
    'COS': '%{BKY_MATH_TRIG_TOOLTIP_COS}',
    'TAN': '%{BKY_MATH_TRIG_TOOLTIP_TAN}',
    'ASIN': '%{BKY_MATH_TRIG_TOOLTIP_ASIN}',
    'ACOS': '%{BKY_MATH_TRIG_TOOLTIP_ACOS}',
    'ATAN': '%{BKY_MATH_TRIG_TOOLTIP_ATAN}',

    // math_on_lists
    'SUM': '%{BKY_MATH_ONLIST_TOOLTIP_SUM}',
    'MIN': '%{BKY_MATH_ONLIST_TOOLTIP_MIN}',
    'MAX': '%{BKY_MATH_ONLIST_TOOLTIP_MAX}',
    'AVERAGE': '%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}',
    'MEDIAN': '%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}',
    'MODE': '%{BKY_MATH_ONLIST_TOOLTIP_MODE}',
    'STD_DEV': '%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}',
    'RANDOM': '%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}'
};

Blockly.Extensions.register('math_op_tooltip',
    Blockly.Extensions.buildTooltipForDropdown(
        'OP', Blockly.Constants.Math.TOOLTIPS_BY_OP));

/**
 * Mixin for mutator functions in the 'math_is_divisibleby_mutator'
 * extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN = {
    /**
     * Create XML to represent whether the 'divisorInput' should be present.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        var divisorInput = (this.getFieldValue('PROPERTY') == 'DIVISIBLE_BY');
        container.setAttribute('divisor_input', divisorInput);
        return container;
    },
    /**
     * Parse XML to restore the 'divisorInput'.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function (xmlElement) {
        var divisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
        this.updateShape_(divisorInput);
    },
    /**
     * Modify this block to have (or not have) an input for 'is divisible by'.
     * @param {boolean} divisorInput True if this block has a divisor input.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function (divisorInput) {
        // Add or remove a Value Input.
        var inputExists = this.getInput('DIVISOR');
        if (divisorInput) {
            if (!inputExists) {
                this.appendValueInput('DIVISOR')
                .setCheck('Number');
            }
        } else if (inputExists) {
            this.removeInput('DIVISOR');
        }
    }
};

/**
 * 'math_is_divisibleby_mutator' extension to the 'math_property' block that
 * can update the block shape (add/remove divisor input) based on whether
 * property is " divisible by ".
 * @this {Blockly.Block}
 * @package
 */
Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION = function () {
    this.getField('PROPERTY').setValidator(function (option) {
        var divisorInput = (option == 'DIVISIBLE_BY');
        this.getSourceBlock().updateShape_(divisorInput);
    });
};

Blockly.Extensions.registerMutator('math_is_divisibleby_mutator',
    Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN,
    Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION);

// Update the tooltip of 'math_change' block to reference the variable.
Blockly.Extensions.register('math_change_tooltip',
    Blockly.Extensions.buildTooltipWithFieldText(
        '%{BKY_MATH_CHANGE_TOOLTIP}', 'VAR'));

/**
 * Mixin with mutator methods to support alternate output based if the
 * 'math_on_list' block uses the 'MODE' operation.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN = {
    /**
     * Modify this block to have the correct output type.
     * @param {string} newOp Either 'MODE' or some op than returns a number.
     * @private
     * @this {Blockly.Block}
     */
    updateType_: function (newOp) {
        if (newOp == 'MODE') {
            this.outputConnection.setCheck('Array');
        } else {
            this.outputConnection.setCheck('Number');
        }
    },
    /**
     * Create XML to represent the output type.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function () {
        var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('op', this.getFieldValue('OP'));
        return container;
    },
    /**
     * Parse XML to restore the output type.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function (xmlElement) {
        this.updateType_(xmlElement.getAttribute('op'));
    }
};

/**
 * Extension to 'math_on_list' blocks that allows support of
 * modes operation (outputs a list of numbers).
 * @this {Blockly.Block}
 * @package
 */
Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION = function () {
    this.getField('OP').setValidator(function (newOp) {
        this.updateType_(newOp);
    }
        .bind(this));
};

Blockly.Extensions.registerMutator('math_modes_of_list_mutator',
    Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN,
    Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION);
