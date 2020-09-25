import React, { Component } from 'react'
import { CheckCertificateSquid } from './CheckCertificateSquid'
import { ONE_DAY } from '../../../common/constants'
import { LoadingSpinner } from '../../loadingSpinner/LoadingSpinner'
import { fetchText } from '../../../common/http'

class CheckCertificateSquidContainer extends Component {
  updateInterval;
  checkCertificateUrl = '/check-cert';

  constructor(props) {
    super(props);

    this.state = {
      certificate: undefined
    }
  }

  async componentDidMount() {
    this.loadFeed().then(() => {
      this.updateInterval = setInterval(this.loadFeed, ONE_DAY)
    })
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }

  async loadFeed() {
    await fetchText(this.checkCertificateUrl, this.checkCertificateExtractor);
  }

  checkCertificateExtractor = (valid) => {
    const notAfter = valid.split("\n")[1].split("=")[1];
    const timeLeft = Date.parse(notAfter) - Date.now();

    if (timeLeft - (3 * ONE_DAY) < 0) {
      this.props.setDangerMode(true);
    }

    const extractedCertificate = {
      title: 'myabilia.com',
      description: 'Giltig till: ' + new Date(notAfter).toLocaleDateString('sv-SE')
    };

    this.setState({
        certificate: extractedCertificate
    })
  };

  render() {
    const { certificate } = this.state;

    return (
        certificate ? (
        <CheckCertificateSquid
          title={certificate.title}
          text={certificate.description}
        />
      ) : <LoadingSpinner/>
    )
  }
}

export { CheckCertificateSquidContainer as CheckCertificateSquid }
