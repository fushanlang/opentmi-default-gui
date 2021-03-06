# Web GUI for OpenTMI

This project contains web GUI for OpenTMI backend, written in Angularjs.

# API's

### Get active visitors count
```
GET /api/v0/gui/visitors
response: 
{
    "connected":{
        "count":1,
        "clients":{}
    },
    "pendingRequests":6
}
```

### Get statistics about today results
```
GET /api/v0/gui/stats/results/today
response:
{
    "passrate":0,
    "executed":0,
    "max":100,
    "failures":{
        "individual":{
            "count":0,
            "max":0
        }
    }
}
```

# Test Management

## Testcases
Table view for test cases. It (will) also support change test cases meta-informations in group.

## Testcase Analyse
Analysing Test cases in PIVO -table. It for example gives information of test summaries etc.
There will be pre-defined configurations in future, so that it is easier to use.

## Testcase Tree
This show tests in feature-tree view. It helps to understand what features covered by test cases and what is not.

## Campaign
Campaign is group of test cases for test automation. (Not imlemented)

# Test Automation (Not imlemented)
## Plans
## Tasks
## Schedule
## Configuration

# SUT (Software Under Test)
## Modules

## Builds
Table view for DUT (device under test) builds. User can also download builds from table link.

## Builds-tree
Tree view, which shows device models, build configuration names and actual builds in tree. 

# DUT (Device Under Test)

## Targets
Targets provide information of what different models of DUT's there are. All meta-information related target is stored to backend, e.g. vendor, model, ...

## Devices
Devices is list of individual DUT's. System can collect information like what tests is executed against individual Device.

# Resources
## Resources
Resource are physical (some exceptions) device. (DUT is also Resource, only different is that its type is 'DUT'). E.g. all powers, switches are Resources. 

## Specification

## Features

# Results

## Results
Result are table -view of executed test case results. It provide searching, grouping and some other features which helps to understand what is executed recently.

## Analyse
Result Analyse purpose is to analyse results. Currently there is simple PIVOT -table, which behaviours exactly same than Excel Pivot -table. It gives views to results from many differents angle.

# Reports  (Not imlemented)

## Reports
Report is static report of something what is generated using Report Template. Report can be example Test Results Report which shows what is testing status of single week.

## Templates
Templates provide information for Report generator that what information and in what format Reports should be contain.
