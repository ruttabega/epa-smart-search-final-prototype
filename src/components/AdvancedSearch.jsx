import { Card, Select, Checkbox, Button, Collapse } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
export default function AdvancedSearch({
    advancedOptions,
    setAdvancedOptions
}) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        console.log(advancedOptions);
    }, [advancedOptions]);

    const onCheckboxChange = (e, checkbox) => {
        let platform = { ...advancedOptions.platform };
        if (checkbox === 'browser-based') {
            platform.browserBased = e.target.checked;
            setAdvancedOptions({
                ...advancedOptions,
                platform: platform
            });
        } else if (checkbox === 'desktop') {
            platform.desktop = e.target.checked;
            setAdvancedOptions({
                ...advancedOptions,
                platform: platform
            });
        } else if (checkbox === 'mobile-app') {
            platform.mobileApp = e.target.checked;
            setAdvancedOptions({
                ...advancedOptions,
                platform: platform
            });
        } else if (checkbox === 'web-service') {
            platform.webService = e.target.checked;
            setAdvancedOptions({
                ...advancedOptions,
                platform: platform
            });
        }
    };
    const onEnvironmentalTopicAreasChange = value => {
        setAdvancedOptions({
            ...advancedOptions,
            environmentalTopicAreas: value
        });
    };
    const onScientificApplicationTypeChange = value => {
        setAdvancedOptions({
            ...advancedOptions,
            scientificApplicationType: value
        });
    };
    const environmentalTopicAreasOptions = [
        { value: 'Air' },
        { value: 'Chemicals and Toxins' },
        { value: 'Ecosystems' },
        { value: 'Emergency Response' },
        { value: 'Climate Change' },
        { value: 'Human Health' },
        { value: 'Land' },
        { value: 'Waste' },
        { value: 'Water' }
    ];
    const scientificApplicationTypeOptions = [
        { value: 'Data visualization' },
        { value: 'Database (interactive)' },
        { value: 'Decision Support' },
        { value: 'Geographic Information System' },
        { value: 'Model' },
        { value: 'Spreadsheet based' }
    ];

    const CollapseCardButton = () => {
        return (
            <Button
                className='collapse-advanced'
                type='text'
                icon={isOpen ? <CaretUpOutlined /> : <CaretDownOutlined />}
                onClick={() => setIsOpen(!isOpen)}
            />
        );
    };
    console.log(isOpen);
    return (
        <Card className='advanced-card' s title='Advanced Search Options'>
            <div className='advanced-section'>
                <div className='advanced-section-header'>
                    Environmental Topic Areas
                </div>
                <div className='advanced-section-content'>
                    <Select
                        style={{ width: '188px' }}
                        onChange={e => onEnvironmentalTopicAreasChange(e)}
                        mode='multiple'
                        showArrow
                        options={environmentalTopicAreasOptions}
                    />
                </div>
            </div>
            <div className='advanced-section'>
                <div className='advanced-section-header'>Platform</div>
                <div className='advanced-section-content'>
                    <Checkbox
                        onChange={e => onCheckboxChange(e, 'browser-based')}
                    >
                        Browser based
                    </Checkbox>
                    <br />
                    <Checkbox onChange={e => onCheckboxChange(e, 'desktop')}>
                        Desktop
                    </Checkbox>
                    <br />
                    <Checkbox onChange={e => onCheckboxChange(e, 'mobile-app')}>
                        Mobile App
                    </Checkbox>
                    <br />
                    <Checkbox
                        onChange={e => onCheckboxChange(e, 'web-service')}
                    >
                        Web Service
                    </Checkbox>
                </div>
            </div>
            <div className='advanced-section'>
                <div className='advanced-section-header'>
                    Scientific Application Type
                </div>
                <div className='advanced-section-content'>
                    <Select
                        style={{ width: '188px' }}
                        onChange={e => onScientificApplicationTypeChange(e)}
                        mode='multiple'
                        showArrow
                        options={scientificApplicationTypeOptions}
                    />
                </div>
            </div>
        </Card>
    );
}
